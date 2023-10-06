import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { amazingOfferListConst } from '../constant/apiConstants';

export const amazingOfferListApi =createApi({
  reducerPath: amazingOfferListConst,
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
      getAmazingOfferList: builder.query({
      query: () => 'limitedProduct',
    }),
  }),
})
  
export const {useGetAmazingOfferListQuery}=amazingOfferListApi