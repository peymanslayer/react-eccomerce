import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { topSliderApi } from "../../api/topSliderApi";
import { amazingOfferListApi } from "../../api/amazingOfferListApi";
import { findProductApi } from "../../api/findProductApi";
import cartSlice from "../slices/cartSlice";
export const store = configureStore({
  reducer: {
    cart:cartSlice,
    [topSliderApi.reducerPath]: topSliderApi.reducer,
    [amazingOfferListApi.reducerPath]:amazingOfferListApi.reducer,
    [findProductApi.reducerPath]:findProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(topSliderApi.middleware,amazingOfferListApi.middleware,findProductApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;