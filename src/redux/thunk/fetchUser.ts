import { createAsyncThunk } from "@reduxjs/toolkit";
import { postRegister, postLogin } from "../../api";

type TUser = {
  email: string;
  password: string;
  fingerprint: string;
};

export const fetchRegister = createAsyncThunk(
  "user/fetchRegister",
  async ({ email, password, fingerprint }: TUser, { rejectWithValue }) => {
    try {
      const response = await postRegister(email, password, fingerprint);
      const data = await response.data;

      return { data };
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const fetchLogin = createAsyncThunk(
  "user/fetchLogin",
  async ({ email, password, fingerprint }: TUser, { rejectWithValue }) => {
    try {
      const response = await postLogin(email, password, fingerprint);
      const data = await response.data;
    
      return { data };
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

/* export const fetchRefresh = createAsyncThunk(
  "user/fetchLogin",
  async (
    {
      fingerprint,
      refreshToken,
    }: { fingerprint: string; refreshToken: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await postRefresh(fingerprint, refreshToken);
      const data = await response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
 */