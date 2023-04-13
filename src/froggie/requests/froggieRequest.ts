import { Froggie } from "../../generated/froggieClient";
import { ApiRequest } from "../../common/ApiRequestSystem/ApiRequest";

export abstract class FroggieRequest<T> extends ApiRequest<T, Froggie.Client> {}
