import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { topSliderApi } from "../../api/topSliderApi";
import { amazingOfferListApi } from "../../api/amazingOfferListApi";
import { findProductApi } from "../../api/findProductApi";

export const store = configureStore({
  reducer: {
    [topSliderApi.reducerPath]: topSliderApi.reducer,
    [amazingOfferListApi.reducerPath]:amazingOfferListApi.reducer,
    [findProductApi.reducerPath]:findProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(topSliderApi.middleware,amazingOfferListApi.middleware,findProductApi.middleware),
});

setupListeners(store.dispatch)