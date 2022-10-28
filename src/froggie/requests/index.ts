import { Froggie } from "@Api";
export { FroggieRequest } from "./froggieRequest";
import {
  ApiResultsFactory,
  FroggieRequestManager,
} from "./froggieRequestManager";
import { LogInPath } from "@Accounts";
import { getAccessToken } from "../accounts/stores/accountStore";

const client = new Froggie.Client();

const factory = new ApiResultsFactory();

function requireLogIn(): void {
  if (confirm("Hello 👋 You need to log in to continue.")) {
    window.location.href = `/${LogInPath}`;
  }
}

export const RequestManager = new FroggieRequestManager(
  client,
  getAccessToken,
  factory,
  requireLogIn
);
