import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const findProductApi = createApi({
    reducerPath: 'findProductApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    tagTypes:['Post'],
    endpoints: (builder) => ({
      getFindProductApi: builder.query({
        query: filed=>({
          url:'findProductFiled',
          method:'POST',
          body:filed
        }),
      }),
    }),
  })
  
export const {useGetFindProductApiQuery}=findProductApi