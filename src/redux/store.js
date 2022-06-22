import { configureStore } from "@reduxjs/toolkit";
import book from "./slices/bookSlice";

export const store = configureStore({
  reducer: { book },
});
