import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { realtedProductConst } from '../constant/apiConstants';

export const realtedProductApi = createApi({
    reducerPath: realtedProductConst,
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    tagTypes:['Post'],
    endpoints: (builder) => ({
      getFindProductApi: builder.query({
        query: filed=>({
          url:'realtedProduct',
          method:'POST',
          body:filed
        }),
      }),
    }),
  })
  
export const {useGetFindProductApiQuery}=realtedProductApi