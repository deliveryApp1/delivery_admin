import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "constants/url";
import { UsersDTO, MetaDTO } from "types";

export type GetUsersType = {
    data: UsersDTO[];
    meta: MetaDTO;
    statusCode: number
};
var token = localStorage.getItem("token")
export const usersApi = createApi({
    refetchOnReconnect: true,
    reducerPath: `users`,
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
    tagTypes: ["Users"],

    endpoints: (builder) => ({
        // Queries
        users: builder.query<any, { page?: number, pageSize?: number }>({
            query: (query) => ({
                url: "/user",
                headers: { "Authorization": `Bearer ${token}` },
                params: { page: query.page, pagesize: query.pageSize }
            }),
            providesTags: ["Users"],
        }),

        // Mutations

        usersAdd: builder.mutation<GetUsersType, { name: string }>({
            query: (data) => ({
                url: "/user",
                method: "POST",
                headers: { "Authorization": `Bearer ${token}` },
                body: data,
            }),
            invalidatesTags: ["Users"],
        }),

        usersUpdate: builder.mutation<
            GetUsersType,
            { id: number | undefined; value: { name: string } | undefined }
        >({
            query: ({ id, value }) => ({
                url: `/user/${id}`,
                method: "PUT",
                headers: { "Authorization": `Bearer ${token}` },
                body: value,
            }),
            invalidatesTags: ["Users"],
        }),

        usersDelete: builder.mutation<GetUsersType, { id: number | undefined }>({
            query: ({ id }) => ({
                url: `/user/${id}`,
                headers: { "Authorization": `Bearer ${token}` },
                method: 'DELETE',
            }),
            invalidatesTags: ["Users"],
        }),
    }),
});

export const {
    useUsersQuery,
    useUsersAddMutation,
    useUsersUpdateMutation,
    useUsersDeleteMutation
} = usersApi;