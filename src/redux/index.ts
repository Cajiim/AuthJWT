import { configureStore } from "@reduxjs/toolkit";
import reducerUser from "./reducers/reducerUser";

const store = configureStore({
  reducer: {
    user: reducerUser,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;