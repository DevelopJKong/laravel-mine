import { atom } from "recoil";

export interface ILogin {
  currentUser: string;
  token: string;
  isFetching: boolean;
  error: boolean;
  expire: number;
}

export const loginSuccessState = atom<ILogin>({
  key: "Login",
  default: JSON.parse(localStorage.getItem("Login") || "{}"),
});

export const loginFailureState = atom<ILogin>({
  key: "Fail",
  default: { currentUser: "", token:"", isFetching: false, error: true , expire: Date.now() },
});

export const logOutState = atom<ILogin>({
  key: "Logout",
  default: { currentUser: "", token:"", isFetching: false, error: false , expire: 0 },
});