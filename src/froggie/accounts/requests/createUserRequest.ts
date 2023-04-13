import { FroggieRequest } from "@/froggie/requests";
import { Froggie } from "@/generated/froggieClient";

export class CreateUserRequest extends FroggieRequest<Froggie.ApiResponseOfLogInResponse> {
  private readonly email: string;
  private readonly name: string;
  private readonly password: string;

  constructor(email: string, name: string, password: string) {
    super();
    this.email = email;
    this.name = name;
    this.password = password;
  }

  protected async executeInternal(
    client: Froggie.Client
  ): Promise<Froggie.ApiResponseOfLogInResponse> {
    const request = new Froggie.CreateUserRequest({
      email: this.email,
      name: this.name,
      password: this.password,
    });

    return await client.createUser_Create(request);
  }
}
