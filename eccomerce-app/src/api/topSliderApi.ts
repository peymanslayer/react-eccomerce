import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { topSliderConst } from '../constant/apiConstants';

export const topSliderApi = createApi({
    reducerPath: topSliderConst,
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (builder) => ({
      getTopSlider: builder.query({
        query: () => `findallproduct`,
      }),
    }),
  })
  
export const {useGetTopSliderQuery}=topSliderApi

