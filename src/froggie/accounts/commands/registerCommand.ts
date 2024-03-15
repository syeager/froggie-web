import { Froggie } from "@Api";
import { setUser } from "@Accounts";
import { FroggieClient } from "@/froggie/requests/FroggieClient";

export async function RegisterCommand(
  email: string,
  name: string,
  password: string
): Promise<boolean> {
  const request = new Froggie.CreateAccountRequest({ email, name, password });
  const response = await FroggieClient().createAccount_Create(request);

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
