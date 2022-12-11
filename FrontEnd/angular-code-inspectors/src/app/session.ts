import {Inspector} from "./inspector";

export function setLoginData(data: Inspector) {
  sessionStorage.setItem("user", JSON.stringify(data));
}

export function isLoggedIn() {
  return sessionStorage.getItem("user") != null;
}

export function getLoginData(): Inspector | null {
  const j = JSON.parse(sessionStorage.getItem("user") || "{}");
  if (j) {
    return new Inspector(j);
  }
  return null;
}


export function logout() {
  sessionStorage.removeItem("user");
}
