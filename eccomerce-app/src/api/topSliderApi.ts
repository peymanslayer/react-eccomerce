import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const topSliderApi = createApi({
    reducerPath: 'topSliderReducer',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (builder) => ({
      getTopSlider: builder.query({
        query: () => `findallproduct`,
      }),
    }),
  })
  
export const {useGetTopSliderQuery}=topSliderApi

