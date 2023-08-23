import { Froggie } from "../../generated/froggieClient";
import { ApiRequest } from "../../common/ApiRequestSystem/ApiRequest";
import { ApiResponse } from "@/common/ApiRequestSystem/ApiRequestManager";

export abstract class FroggieRequest<T extends ApiResponse> extends ApiRequest<
  T,
  Froggie.Client
> {}
