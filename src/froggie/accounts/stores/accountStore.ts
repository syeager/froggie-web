const accessTokenKey = "account.accessToken";

let activeAccessToken = "";

export function getAccessToken(): string {
  if (!activeAccessToken) {
    activeAccessToken = localStorage.getItem(accessTokenKey) || "";
  }

  return activeAccessToken;
}

export function setAccessToken(accessToken: string): void {
  localStorage.setItem(accessTokenKey, accessToken);
  activeAccessToken = accessToken;
}
