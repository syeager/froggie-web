import { RequestManager } from "@/froggie/requests";
import { Froggie } from "@Api";
import { CreateUserRequest } from "../requests/createUserRequest";
import { setAccessToken } from "../stores/accountStore";

export async function RegisterCommand(
  email: string,
  name: string,
  password: string
): Promise<boolean> {
  const request = new CreateUserRequest(email, name, password);
  const response = await RequestManager.send(request);

  if (!(response instanceof Froggie.ApiResponseOfLogInResponse)) {
    throw console.error("Unknown error while registering user");
  }

  if (response.isError || !response.obj) {
    console.error(response.message);
    return false;
  }

  const logInResponse = response.obj;
  if (!logInResponse.succeeded || !logInResponse.accessToken) {
    console.log("Failed to register user");
    return false;
  }

  setAccessToken(logInResponse.accessToken);

  return true;
}
