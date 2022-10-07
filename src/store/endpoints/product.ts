import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "constants/url";
import { ProductDTO, MetaDTO } from "types";

export type GetProductType = {
    data: ProductDTO[];
    meta: MetaDTO;
    statusCode: number
};

export const productApi = createApi({
    refetchOnReconnect: true,
    reducerPath: `product`,
    baseQuery: fetchBaseQuery({
        baseUrl,
    }),
    tagTypes: ["Product"],

    endpoints: (builder) => ({
        // Queries
        product: builder.query<any, { page?: number, pageSize?: number }>({
            query: (query) => ({
                url: `/product`,
                params: { page: query.page, pagesize: query.pageSize }
            }),
            providesTags: ["Product"],
        }),

        // Mutations

        productAdd: builder.mutation<GetProductType, { name: string }>({
            query: (data) => ({
                url: "/product",
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
                method: "PUT",
                body: value,
            }),
            invalidatesTags: ["Product"],
        }),

        productDelete: builder.mutation<GetProductType, { id: number | undefined }>({
            query: ({ id }) => ({
                url: `/product/${id}`,
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