import { Froggie } from "@/generated/froggieClient";
import { getAccessToken } from "@Accounts";

export function FroggieClient(): Froggie.Client {
  const client = new Froggie.Client();
  client.accessToken = getAccessToken();
  return client;
}
