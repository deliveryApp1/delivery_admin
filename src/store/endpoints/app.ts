import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "constants/url";

export const appApi = createApi({
    refetchOnReconnect: true,
    reducerPath: `app`,
    baseQuery: fetchBaseQuery({
        baseUrl,
    }),
    tagTypes: ["app"],

    endpoints: (builder) => ({
        // Queries
        app: builder.query({
            query: () => ({
                url: "/app",
            }),
            providesTags: ["app"],
        }),
        categoryList: builder.query<any, void>({
            query: () => ({
                url: "/category",
            }),
            providesTags: ["app"],
        }),
        productSearch: builder.query<any | undefined, void>({
            query: (productName) => ({
                url: `/product/search/${productName}`,
            }),
            providesTags: ["app"],
        }),
        productList: builder.query<any, { isHave: boolean }>({
            query: ({ isHave }) => {
                return {
                    url: `/product`,
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
                body: data,
            }),
            invalidatesTags: ["app"],
        }),
        imageUpload: builder.mutation({
            query: (data) => ({
                url: "/image-upload",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["app"],
        }),

        appUpdate: builder.mutation({
            query: ({ id, value }) => ({
                url: `/app/${id}`,
                method: "PUT",
                body: value,
            }),
            invalidatesTags: ["app"],
        }),

        appDelete: builder.mutation({
            query: ({ id }) => ({
                url: `/app/${id}`,
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
    useAppDeleteMutation
} = appApi;