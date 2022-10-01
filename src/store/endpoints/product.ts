import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "constants/url";
import { ProductDTO } from "types/productTypes";

export type GetProductType = {
    data: ProductDTO[];
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
        product: builder.query<GetProductType, void>({
            query: () => ({
                url: "/product",
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
            { id: number | undefined; value: { name: string } | undefined }
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