import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const amazingOfferListApi =createApi({
  reducerPath: 'amazingOfferListApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
      getAmazingOfferList: builder.query({
      query: () => 'limitedProduct',
    }),
  }),
})
  
export const {useGetAmazingOfferListQuery}=amazingOfferListApi