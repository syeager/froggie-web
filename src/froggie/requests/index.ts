import { Froggie } from "@Api";
export { FroggieRequest } from "./FroggieRequest";
import { FroggieRequestManager } from "./FroggieRequestManager";
import { LogInPath } from "@/froggie/accounts/Index";
import { getAccessToken } from "../accounts/stores/AccountStore";

const client = new Froggie.Client();

function requireLogIn(): void {
  if (confirm("Hello 👋 You need to log in to continue.")) {
    window.location.href = `/${LogInPath}`;
  }
}

export const RequestManager = new FroggieRequestManager(
  client,
  getAccessToken,
  requireLogIn
);
