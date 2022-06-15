import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "./fetchSlice";

const store = configureStore({
  reducer: { fetch: fetchReducer },
});

export type fetchState = ReturnType<typeof store.getState >;
export default store;
