import { $api } from "../index"

export const authRegister = (payload: any) => $api.post('auth/register', payload);

export const authLogin = (payload: any) => $api.post('auth/login', payload);

export const authRefresh = (payload: any) => $api.post('auth/refresh', payload);