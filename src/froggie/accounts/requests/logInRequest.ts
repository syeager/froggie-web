import { FroggieRequest } from "@/froggie/requests";
import { Froggie } from "@/generated/froggieClient";

export class LogInRequest extends FroggieRequest<Froggie.ApiResponseOfLogInResponse> {
  private readonly email: string;
  private readonly password: string;

  constructor(email: string, password: string) {
    super();
    this.email = email;
    this.password = password;
  }

  protected async executeInternal(
    client: Froggie.Client
  ): Promise<Froggie.ApiResponseOfLogInResponse> {
    const request = new Froggie.LogInUserRequest({
      email: this.email,
      password: this.password,
    });

    return await client.logInUser_LogIn(request);
  }
}
