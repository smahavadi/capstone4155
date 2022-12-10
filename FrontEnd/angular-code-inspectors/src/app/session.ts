import {Inspector} from "./inspector";

export function setLoginData(data: Inspector) {
  sessionStorage.setItem("user", JSON.stringify(data));
}

export function isLoggedIn() {
  console.log("Checking if logged in");
  return sessionStorage.getItem("user") != null;
}

export function getLoginData() {
  return JSON.parse(sessionStorage.getItem("user") || "{}");
}


export function logout() {
  sessionStorage.removeItem("user");
}
