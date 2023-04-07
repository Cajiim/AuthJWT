import axios from "axios";

export const baseURL = process.env.REACT_APP_BASE_ADDRESS;
const instance = axios.create({ baseURL });

export const postRegister = (
  email: string,
  password: string,
  fingerprint: string
) =>
  instance.post(`${baseURL}auth/register`, {
    username: email,
    password: password,
    fingerprint: fingerprint,
  });

export const postLogin = (
  email: string,
  password: string,
  fingerprint: string
) =>
  instance.post(`${baseURL}auth/login`, {
    username: email,
    password: password,
    fingerprint: fingerprint,
  });

export const postRefresh = () => instance.post(`${baseURL}auth/refresh`);
