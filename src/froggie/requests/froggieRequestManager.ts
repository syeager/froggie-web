import {
  ApiResult,
  RequestManager as RM,
} from "../../common/ApiRequestSystem/ApiRequestManager";
import { Froggie } from "../../generated/froggieClient";

export class FroggieRequestManager extends RM<Froggie.Client> {}

export class ApiResultsFactory {
  public create(): ApiResult {
    return new Froggie.ApiResponse();
  }

  public createWithData(data: Froggie.ApiResponse): ApiResult {
    return new Froggie.ApiResponse(data);
  }
}
