import { createAsyncThunk } from "@reduxjs/toolkit";
import { authRegister, authLogin } from "../../api/Auth";

type TUser = {
  username: string;
  password: string;
  fingerprint: string;
};

export const fetchRegister = createAsyncThunk(
  "user/fetchRegister",
  async ({ username, password, fingerprint }: TUser, { rejectWithValue }) => {
    try {
      const response = await authRegister({ username, password, fingerprint });
      const data = await response.data;
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      const isAuth = true;

      return { isAuth };
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const fetchLogin = createAsyncThunk(
  "user/fetchLogin",
  async ({ username, password, fingerprint }: TUser, { rejectWithValue }) => {
    try {
      const response = await authLogin({ username, password, fingerprint });
      const data = await response.data;
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      const isAuth = true;

      return { isAuth };
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
