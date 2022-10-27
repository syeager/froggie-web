import { RequestManager } from "@/froggie/requests";
import { Froggie } from "@/generated/froggieClient";
import { LogInRequest } from "../requests/logInRequest";
import { setAccessToken } from "../stores/accountStore";

export async function LogInCommand(
  email: string,
  password: string
): Promise<boolean> {
  const request = new LogInRequest(email, password);
  const response = await RequestManager.send(request);

  if (!(response instanceof Froggie.ApiResponseOfLogInResponse)) {
    throw console.error("Unknown error while logging in.");
  }

  if (response.isError || !response.obj) {
    console.error(response.message);
    return false;
  }

  const logInResponse = response.obj;
  if (!logInResponse.succeeded || !logInResponse.accessToken) {
    console.log("Failed to log in");
    return false;
  }

  setAccessToken(logInResponse.accessToken);

  return true;
}
