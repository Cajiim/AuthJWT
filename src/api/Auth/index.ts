import { $api } from "../index";
import type { TUser } from "../../redux/thunk/fetchUser";

export const authRegister = (payload: TUser) =>
  $api.post("auth/register", payload);

export const authLogin = (payload: TUser) => $api.post("auth/login", payload);

export const authRefresh = (payload: TUser) =>
  $api.post("auth/refresh", payload);
