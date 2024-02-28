import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const rootApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/farm/' }),
    endpoints: (builder) => ({

    })
})