import { setUser } from "@Accounts";
import { FroggieClient } from "@/froggie/requests/FroggieClient";
import { Froggie } from "@Api";

export async function LogInCommand(
  email: string,
  password: string
): Promise<boolean> {
  const request = new Froggie.LogInUserRequest({ email, password });
  const response = await FroggieClient().logInUser_LogIn(request);

  const logInResponse = response.obj;
  if (
    !response.isError &&
    logInResponse &&
    logInResponse.succeeded &&
    logInResponse.user &&
    logInResponse.accessToken
  ) {
    setUser(logInResponse.user, logInResponse.accessToken);
    return true;
  }

  console.error(response.message);
  return false;
}
