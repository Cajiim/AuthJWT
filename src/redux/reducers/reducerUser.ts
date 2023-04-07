import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchRegister, fetchLogin, /* fetchRefresh */ } from "../thunk/fetchUser";

type TToken = {
  accessToken: string,
  refreshToken: string,
  isError: boolean,
  errorText: string,
}

type TResponseData = {
  data: TToken;
}

const initialState: TToken = {
  accessToken: '',
  refreshToken: '',
  isError: false,
  errorText: '',
};

const paintingSlice = createSlice({
  name: "token",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRegister.fulfilled.type]: (
      state,
      action: PayloadAction<TResponseData>
    ) => {
      state.accessToken = action.payload.data.accessToken;
      state.refreshToken = action.payload.data.refreshToken;
    },
    [fetchRegister.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isError = true;
      state.errorText = action.payload;
    },

    

    [fetchLogin.fulfilled.type]: (
      state,
      action: PayloadAction<TResponseData>
    ) => {
      state.accessToken = action.payload.data.accessToken;
      state.refreshToken = action.payload.data.refreshToken;
    },
    [fetchLogin.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isError = true;
      state.errorText = action.payload;
    },

    /* [fetchRefresh.fulfilled.type]: (
      state,
      action: PayloadAction<TResponseData>
    ) => {
      state.accessToken = action.payload.data.accessToken;
      state.refreshToken = action.payload.data.refreshToken;
    },
    [fetchRefresh.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isError = true;
      state.errorText = action.payload;
    }, */
  },
});

export default paintingSlice.reducer;