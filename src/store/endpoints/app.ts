import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "constants/url";


var token = localStorage.getItem("token")
export const appApi = createApi({
    refetchOnReconnect: true,
    reducerPath: `app`,
    baseQuery: fetchBaseQuery({
        baseUrl,
        // prepareHeaders: (headers, { getState }) => {
        //     let token = localStorage.getItem("token")
        //     if (token) {
        //         token = JSON.parse(token)
        //         console.log('token: ', token);

        //         headers.set("Authorization", `Bearer ${token}`);
        //     }
        //     return headers;
        // },
    }),
    tagTypes: ["app"],

    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials: any) => {
                console.log('credentials: ', credentials);
                return ({
                    url: '/auth/login',
                    headers: { "Authorization": `Bearer ${token}` },
                    method: 'POST',
                    body: credentials,
                })
            }
        }),
        // Queries
        app: builder.query({
            query: () => ({
                url: "/app",
                headers: { "Authorization": `Bearer ${token}` },
            }),
            providesTags: ["app"],
        }),
        categoryList: builder.query<any, void>({
            query: () => ({
                url: "/category",
                headers: { "Authorization": `Bearer ${token}` },
            }),
            providesTags: ["app"],
        }),
        productSearch: builder.query<any | undefined, void>({
            query: (productName) => ({
                url: `/product/search/${productName}`,
                headers: { "Authorization": `Bearer ${token}` },
            }),
            providesTags: ["app"],
        }),
        productList: builder.query<any, { isHave: boolean }>({
            query: ({ isHave }) => {
                return {
                    url: `/product`,
                    headers: { "Authorization": `Bearer ${token}` },
                    params: { isHave: isHave }
                }
            },
            providesTags: ["app"],
        }),
        // Mutations

        appAdd: builder.mutation({
            query: (data) => ({
                url: "/app",
                method: "POST",
                headers: { "Authorization": `Bearer ${token}` },
                body: data,
            }),
            invalidatesTags: ["app"],
        }),
        imageUpload: builder.mutation({
            query: (data) => ({
                url: "/image-upload",
                headers: { "Authorization": `Bearer ${token}` },
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["app"],
        }),

        appUpdate: builder.mutation({
            query: ({ id, value }) => ({
                url: `/app/${id}`,
                headers: { "Authorization": `Bearer ${token}` },
                method: "PUT",
                body: value,
            }),
            invalidatesTags: ["app"],
        }),

        appDelete: builder.mutation({
            query: ({ id }) => ({
                url: `/app/${id}`,
                headers: { "Authorization": `Bearer ${token}` },
                method: 'DELETE',
            }),
            invalidatesTags: ["app"],
        }),
    }),
});

export const {
    useCategoryListQuery,
    useProductSearchQuery,
    useProductListQuery,
    useAppQuery,
    useAppAddMutation,
    useImageUploadMutation,
    useAppUpdateMutation,
    useAppDeleteMutation,
    useLoginMutation,
} = appApi;