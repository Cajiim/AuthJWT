import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const parseToken = (token: string) => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");

  const decodeFunc = (partToken: string) =>
    decodeURIComponent(
      window
        .atob(partToken)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

  const isJWT = () => {
    const jwt = token.split(".");
    if (jwt.length != 3) return false;

    try {
      const jsonFirstPart = jwt[0].replace(/-/g, "+").replace(/_/g, "/");
      const decodeFirst = decodeFunc(jsonFirstPart);
      const firstPart = JSON.parse(decodeFirst);
      if (!firstPart["alg"]) return false;
      
      const jsonSecondPart = jwt[1].replace(/-/g, "+").replace(/_/g, "/");
      const decodeSecond = decodeFunc(jsonSecondPart);
      JSON.parse(decodeSecond);
    } catch (err) {
      return false;
    }
    return true;
  };

  const jsonPayload = decodeFunc(base64);

  return isJWT() ? JSON.parse(jsonPayload) : "";
};
