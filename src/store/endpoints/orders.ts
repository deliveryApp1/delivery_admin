import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "constants/url";
import { OrderDTO, MetaDTO } from "types";

export type GetOrderType = {
    data: OrderDTO[];
    meta: MetaDTO;
    statusCode: number
};
var token = localStorage.getItem("token")
export const orderApi = createApi({
    refetchOnReconnect: true,
    reducerPath: `order`,
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
    tagTypes: ["Order"],

    endpoints: (builder) => ({
        // Queries
        order: builder.query<any, { page?: number, pageSize?: number }>({
            query: (query) => ({
                url: `/order`,
                headers: { "Authorization": `Bearer ${token}` },
                params: { page: query.page, pagesize: query.pageSize }
            }),
            providesTags: ["Order"],
        }),

        // Mutations

        orderAdd: builder.mutation<GetOrderType, any>({
            query: (data) => ({
                url: "/order",
                headers: { "Authorization": `Bearer ${token}` },
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Order"],
        }),

        orderUpdate: builder.mutation<
            GetOrderType,
            { id: number; value: any }
        >({
            query: ({ id, value }) => ({
                url: `/order/${id}`,
                headers: { "Authorization": `Bearer ${token}` },
                method: "PUT",
                body: value,
            }),
            invalidatesTags: ["Order"],
        }),

        orderDelete: builder.mutation<GetOrderType, { id: number | undefined }>({
            query: ({ id }) => ({
                url: `/order/${id}`,
                headers: { "Authorization": `Bearer ${token}` },
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