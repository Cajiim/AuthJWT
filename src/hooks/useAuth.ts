import { useEffect } from "react";

import { useAppDispatch } from "../utils/utils";
import { parseToken } from "../utils/utils";
import { login, logout } from "../redux/reducers/reducerUser";

const useAuth = () => {
  const dispatch = useAppDispatch();

  const resetToken = () => {
    dispatch(logout);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = localStorage.getItem("accessToken");
  const parse = refreshToken ? parseToken(refreshToken) : "";

  useEffect(() => {
    if (refreshToken && parse.exp < Date.now() / 1000) {
      resetToken();
    }
    accessToken ? dispatch(login()) : "";
  }, [refreshToken]);
};

export default useAuth;
