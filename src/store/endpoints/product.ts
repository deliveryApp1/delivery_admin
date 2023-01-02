import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "constants/url";
import { ProductDTO, MetaDTO } from "types";

export type GetProductType = {
    data: ProductDTO[];
    meta: MetaDTO;
    statusCode: number
};
var token = localStorage.getItem("token")
export const productApi = createApi({
    refetchOnReconnect: true,
    reducerPath: `product`,
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
    tagTypes: ["Product"],

    endpoints: (builder) => ({
        // Queries
        product: builder.query<any, { page?: number, pageSize?: number }>({
            query: (query) => ({
                url: `/product`,
                headers: { "Authorization": `Bearer ${token}` },
                params: { page: query.page, pagesize: query.pageSize }
            }),
            providesTags: ["Product"],
        }),

        // Mutations

        productAdd: builder.mutation<GetProductType, { name: string }>({
            query: (data) => ({
                url: "/product",
                headers: { "Authorization": `Bearer ${token}` },
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Product"],
        }),

        productUpdate: builder.mutation<
            GetProductType,
            { id: number; value: { name: string } | undefined }
        >({
            query: ({ id, value }) => ({
                url: `/product/${id}`,
                headers: { "Authorization": `Bearer ${token}` },
                method: "PUT",
                body: value,
            }),
            invalidatesTags: ["Product"],
        }),

        productDelete: builder.mutation<GetProductType, { id: number | undefined }>({
            query: ({ id }) => ({
                url: `/product/${id}`,
                headers: { "Authorization": `Bearer ${token}` },
                method: 'DELETE',
            }),
            invalidatesTags: ["Product"],
        }),
    }),
});

export const {
    useProductQuery,
    useProductAddMutation,
    useProductUpdateMutation,
    useProductDeleteMutation
} = productApi;