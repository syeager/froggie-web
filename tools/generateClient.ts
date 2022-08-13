/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */

const commander = require("commander");
const dotenvFlow = require("dotenv-flow");
const path = require("path");
const child_process = require("child_process");
const prependFile = require("prepend-file");
const fs = require("fs");
const clientName = "FroggieClient";

loadEnv();
const options = loadOptions();
runNswag(options);
postProcessClient();
console.info("Client generation complete");

function loadEnv() {
  const mode = process.env.NODE_ENV || "development";
  console.info(`Mode=${mode}`);

  const env = dotenvFlow.config({ node_env: mode, default_node_env: mode });
  if (env.error) {
    throw new Error(env.error.message);
  } else {
    console.info(env.parsed);
  }
}

function loadOptions() {
  commander.option("-u, --url <url>,", "API URL", process.env.API_URL);
  commander.option(
    "-s, --scheme <scheme>,",
    "HTTP/HTTPS",
    process.env.API_SCHEME
  );
  commander.parse(process.argv);

  const options = commander.opts();
  console.info(`url=${options.url}`);
  console.info(`scheme=${options.scheme}`);

  if (!options.url) {
    throw new Error("url is required");
  }

  if (!options.scheme) {
    throw new Error("scheme is required");
  }

  return options;
}

function runNswag(options: any) {
  function onComplete(
    error: never | null,
    stdout: string,
    stderr: string
  ): void {
    if (stdout !== "") {
      console.log(stdout);
    }

    if (stderr !== "") {
      console.error(stderr);
    }

    if (error != null) {
      throw error;
    }
  }

  console.info("Running nswag");
  const nswagPath = path.join("node_modules", ".bin", "nswag");
  const variables = `/variables:API_URL=${options.url},SCHEME=${options.scheme}`;
  const command = `${nswagPath} run ./config/${clientName}.nswag /runtime:Net60 ${variables}`;
  child_process.execSync(command, onComplete);
}

function postProcessClient() {
  const configPath = path.join(
    __dirname,
    "..",
    "config",
    `${clientName}.nswag`
  );
  const nswagConfigString = fs.readFileSync(configPath, "utf8");
  const nswagConfig = JSON.parse(nswagConfigString);
  const outputFile =
    nswagConfig.codeGenerators.openApiToTypeScriptClient.output;
  const outputPath = path.join(__dirname, "..", "config", outputFile);
  console.info(`Generated client output file at ${outputPath}`);
  console.info(
    "Editing generated client file to be ignored by the ts compiler"
  );
  prependFile(outputPath, "/* eslint-disable */\n// @ts-nocheck\n");
}
