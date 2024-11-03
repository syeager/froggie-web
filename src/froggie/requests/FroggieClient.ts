import { Froggie } from "@/generated/froggieClient";
import { getAccessToken } from "@/froggie/accounts/Index";

export function FroggieClient(): Froggie.Client {
  const client = new Froggie.Client();
  client.accessToken = getAccessToken();
  return client;
}
