import { ApiRequest } from "./ApiRequest";
import { wait } from "../Time";

export type ApiClient = {
  accessToken: string | undefined;
};

export type ApiResult = {
  statusCode?: number;
  isError?: boolean;
  message?: string | undefined;
};

export type ApiResponse = {
  status: number;
  response: string;
  message: string;
};

export type ApiResultFactory = {
  create: () => ApiResult;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createWithData: (data: any) => ApiResult;
};

export type RequiresLogInCallback = () => void;
type AccessTokenLoader = () => string;

export class RequestManager<TClient extends ApiClient> {
  private static readonly attemptMax = 3;

  private readonly apiClient: TClient;
  private readonly getAccessToken: AccessTokenLoader;
  private readonly apiResultFactory: ApiResultFactory;
  private readonly requiresLogInCallback: RequiresLogInCallback;

  constructor(
    apiClient: TClient,
    getAccessToken: AccessTokenLoader,
    apiResultFactory: ApiResultFactory,
    requiresLogInCallback: RequiresLogInCallback | undefined = undefined
  ) {
    this.apiClient = apiClient;
    this.getAccessToken = getAccessToken;
    this.apiResultFactory = apiResultFactory;
    this.requiresLogInCallback = requiresLogInCallback
      ? requiresLogInCallback
      : () => alert("you need to sign in");
  }

  public async send<T extends ApiResult>(
    request: ApiRequest<T, TClient>
  ): Promise<T | ApiResponse> {
    return this.sendInternal(request, 0);
  }

  private async sendInternal<T extends ApiResult>(
    request: ApiRequest<T, TClient>,
    attempts: number
  ): Promise<T | ApiResponse> {
    this.apiClient.accessToken = this.getAccessToken() ?? "";

    try {
      return await request.execute(this.apiClient);
    } catch (response) {
      const apiResponse = response as ApiResponse;
      if (apiResponse) {
        let apiResult: ApiResult;

        if (apiResponse.response && apiResponse.response.length > 0) {
          const data = JSON.parse(apiResponse.response);
          apiResult = this.apiResultFactory.createWithData(data);
        } else {
          apiResult = this.apiResultFactory.create();
          apiResult.isError = true;
          apiResult.statusCode = apiResponse.status;
          apiResult.message = apiResponse.message;
        }

        let needsRetry = false;

        if (apiResponse.status == 401) {
          // TODO: Check if refresh token exists.
          const retryToken = undefined;
          needsRetry == retryToken;
        } else if (apiResponse.status >= 500) {
          needsRetry = true;
        }

        needsRetry = needsRetry && attempts < RequestManager.attemptMax;
        console.warn(
          `Request '${request.getTypeName()}' failed:status=${
            apiResponse.status
          }, count=${attempts}/${
            RequestManager.attemptMax
          }, willRetry=${needsRetry}`
        );

        if (needsRetry) {
          attempts += 1;
          const ms = attempts * 500;
          await wait(ms);
          return this.sendInternal(request, attempts);
        } else {
          if (apiResponse.status == 401) {
            this.requiresLogInCallback();
          }
        }
      }
    }

    return {
      status: 503,
      message: "Did not get response from the API",
      response: "",
    };
  }
}
