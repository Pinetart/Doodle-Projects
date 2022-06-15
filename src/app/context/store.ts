import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "./fetchSlice";

const store = configureStore({
  reducer: { fetch: fetchReducer },
});
export default store;
