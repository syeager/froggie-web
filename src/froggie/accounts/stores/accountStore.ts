import { User } from "@Accounts";

const accessTokenKey = "account.accessToken";
const userKey = "acccount.user";

let activeAccessToken = "";
let activeUser: User | undefined = undefined;

export function getAccessToken(): string {
  if (!activeAccessToken) {
    activeAccessToken = localStorage.getItem(accessTokenKey) || "";
  }

  return activeAccessToken;
}

// TODO: Should this redirect to log in if undefined?
export function getUser(): User | undefined {
  if (!activeUser) {
    const userData = localStorage.getItem(userKey);
    if (userData) {
      activeUser = JSON.parse(userData) as User;
    }
  }

  return activeUser;
}

export function setUser(user: User, accessToken: string): void {
  const userData = JSON.stringify(user);
  localStorage.setItem(userKey, userData);
  activeUser = user;

  localStorage.setItem(accessTokenKey, accessToken);
  activeAccessToken = accessToken;
}
