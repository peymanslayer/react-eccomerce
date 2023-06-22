import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { topSliderApi } from "../../api/topSliderApi";

export const store = configureStore({
  reducer: {
    [topSliderApi.reducerPath]: topSliderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(topSliderApi.middleware),
});

setupListeners(store.dispatch)