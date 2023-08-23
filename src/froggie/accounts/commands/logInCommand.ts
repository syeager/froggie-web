import { RequestManager } from "@/froggie/requests";
import { LogInRequest } from "../requests/logInRequest";
import { setUser } from "../stores/accountStore";

export async function LogInCommand(
  email: string,
  password: string
): Promise<boolean> {
  const request = new LogInRequest(email, password);
  const response = await RequestManager.send(request);

  if (response.isError || !response.obj) {
    throw alert(response.message);
  }

  const logInResponse = response.obj;
  if (
    !logInResponse.succeeded ||
    !logInResponse.accessToken ||
    !logInResponse.user
  ) {
    console.log("Failed to log in");
    return false;
  }

  setUser(logInResponse.user, logInResponse.accessToken);

  return true;
}
