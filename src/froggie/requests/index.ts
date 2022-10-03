import { Froggie } from "@Api";
export { FroggieRequest } from "./froggieRequest";
import {
  ApiResultsFactory,
  FroggieRequestManager,
} from "./froggieRequestManager";
import { getAccessToken } from "../accounts/stores/accountStore";

const client = new Froggie.Client();

const factory = new ApiResultsFactory();

export const RequestManager = new FroggieRequestManager(
  client,
  getAccessToken,
  factory
);
