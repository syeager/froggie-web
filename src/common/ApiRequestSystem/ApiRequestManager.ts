import { ApiRequest } from "./ApiRequest";
import { wait } from "../Time";

export type ApiClient = {
  accessToken: string | undefined;
};

export type ApiResponse = {
  statusCode: number;
  isError: boolean;
  message: string;
};

export type RequiresLogInCallback = () => void;
type AccessTokenLoader = () => string;

export class RequestManager<TClient extends ApiClient> {
  private static readonly attemptMax = 3;

  private readonly apiClient: TClient;
  private readonly getAccessToken: AccessTokenLoader;
  private readonly requiresLogInCallback: RequiresLogInCallback;

  constructor(
    apiClient: TClient,
    getAccessToken: AccessTokenLoader,
    requiresLogInCallback: RequiresLogInCallback | undefined = undefined
  ) {
    this.apiClient = apiClient;
    this.getAccessToken = getAccessToken;
    this.requiresLogInCallback = requiresLogInCallback
      ? requiresLogInCallback
      : () => alert("you need to sign in");
  }

  public async send<T extends ApiResponse>(
    request: ApiRequest<T, TClient>
  ): Promise<T> {
    return this.sendInternal(request, 0);
  }

  private async sendInternal<T extends ApiResponse>(
    request: ApiRequest<T, TClient>,
    attempts: number
  ): Promise<T> {
    this.apiClient.accessToken = this.getAccessToken() ?? "";

    try {
      return await request.execute(this.apiClient);
    } catch (response) {
      let apiResponse = response as ApiResponse;

      if (!apiResponse) {
        console.error("Could not handle response from API");
        apiResponse = {
          statusCode: 0,
          isError: true,
          message: "Could not handle response from API",
        };
      }

      const needsRetry = this.checkRetries(apiResponse.statusCode, attempts);

      console.warn(
        `Request '${request.getTypeName()}' failed:status=${
          apiResponse.statusCode
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
        if (apiResponse.statusCode == 401) {
          this.requiresLogInCallback();
          // TODO: Should we exit here?
        }
      }

      return apiResponse as T;
    }
  }

  checkRetries(statusCode: number, attempts: number): boolean {
    let needsRetry = false;
    if (statusCode == 401) {
      // TODO: Check if refresh token exists.
      const retryToken = undefined;
      needsRetry == retryToken;
    } else if (statusCode >= 500) {
      needsRetry = true;
    }

    needsRetry = needsRetry && attempts < RequestManager.attemptMax;
    return needsRetry;
  }
}
