import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { topSliderApi } from "../../api/topSliderApi";
import { amazingOfferListApi } from "../../api/amazingOfferListApi";
export const store = configureStore({
  reducer: {
    [topSliderApi.reducerPath]: topSliderApi.reducer,
    [amazingOfferListApi.reducerPath]:amazingOfferListApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(topSliderApi.middleware,amazingOfferListApi.middleware),
});

setupListeners(store.dispatch)