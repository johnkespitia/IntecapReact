import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://randomuser.me/api' }),
    endpoints: (builder) => ({
        getPersonas: builder.query({
            query: () => '?results=1000'
        })
    })
}) 

export const { useGetPersonasQuery } = api

export default api.reducer