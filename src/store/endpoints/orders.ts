import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "constants/url";
import { OrderDTO, MetaDTO } from "types";

export type GetOrderType = {
    data: OrderDTO[];
    meta: MetaDTO;
    statusCode: number
};

export const orderApi = createApi({
    refetchOnReconnect: true,
    reducerPath: `order`,
    baseQuery: fetchBaseQuery({
        baseUrl,
    }),
    tagTypes: ["Order"],

    endpoints: (builder) => ({
        // Queries
        order: builder.query<any, { page?: number, pageSize?: number }>({
            query: (query) => ({
                url: `/order`,
                params: { page: query.page, pagesize: query.pageSize }
            }),
            providesTags: ["Order"],
        }),

        // Mutations

        orderAdd: builder.mutation<GetOrderType, any>({
            query: (data) => ({
                url: "/order",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Order"],
        }),

        orderUpdate: builder.mutation<
            GetOrderType,
            { id: number; value: { name: string } | undefined }
        >({
            query: ({ id, value }) => ({
                url: `/order/${id}`,
                method: "PUT",
                body: value,
            }),
            invalidatesTags: ["Order"],
        }),

        orderDelete: builder.mutation<GetOrderType, { id: number | undefined }>({
            query: ({ id }) => ({
                url: `/order/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["Order"],
        }),
    }),
});

export const {
    useOrderQuery,
    useOrderAddMutation,
    useOrderUpdateMutation,
    useOrderDeleteMutation
} = orderApi;