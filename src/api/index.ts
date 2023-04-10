import axios from "axios";
import { parseToken } from "../utils/utils";

export const baseURL = process.env.REACT_APP_BASE_ADDRESS;

const defaultConfig = {
  baseURL: baseURL,
  withCredentials: true,
};

export const $api = axios.create(defaultConfig);

$api.interceptors.request.use(
  async (config) => {
    const { exp } = localStorage.getItem("accessToken")
      ? parseToken(localStorage.getItem("accessToken"))
      : "";
    if (exp && exp < Date.now() / 1000) {
      const { data } = await $api.post("auth/refresh", {
        refreshToken: localStorage.getItem("refreshToken"),
        fingerprint: "finger",
      });
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
    }

    config.headers.Authorization = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`;

    return config;
  },
  null,
  {
    runWhen: (config) =>
      config.url !== "auth/login" && config.url !== "auth/refresh",
  }
);

$api.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (
      !localStorage.getItem("refreshToken") ||
      error.response.status !== 401
    ) {
      throw Error("!Auth");
    }

    const { data } = await $api.post("auth/refresh", {
      refreshToken: localStorage.getItem("refreshToken"),
      fingerprint: "finger",
    });

    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);

    return $api(error.config);
  }
);
