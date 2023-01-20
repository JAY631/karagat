import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "../store/theme";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
