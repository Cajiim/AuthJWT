import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchRegister, fetchLogin } from "../thunk/fetchUser";

type TToken = {
  isError: boolean;
  errorText: string;
  isAuth: boolean;
};

const initialState: TToken = {
  isError: false,
  errorText: "",
  isAuth: false,
};

const userSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    }, 
  },
  extraReducers: {
    [fetchRegister.fulfilled.type]: (state, action: PayloadAction<TToken>) => {
      state.isAuth = action.payload.isAuth;
    },
    [fetchRegister.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isError = true;
      state.errorText = action.payload;
    },

    [fetchLogin.fulfilled.type]: (state, action: PayloadAction<TToken>) => {
      state.isAuth = action.payload.isAuth;
    },
    [fetchLogin.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isError = true;
      state.errorText = action.payload;
    },

  },
});

export const { logout, login } = userSlice.actions;

export default userSlice.reducer;
