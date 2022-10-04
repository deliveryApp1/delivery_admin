import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "constants/url";
import { UsersDTO } from "types";

export type GetUsersType = {
    data: UsersDTO[];
    statusCode: number
};
export const usersApi = createApi({
    refetchOnReconnect: true,
    reducerPath: `users`,
    baseQuery: fetchBaseQuery({
        baseUrl,
    }),
    tagTypes: ["Users"],

    endpoints: (builder) => ({
        // Queries
        users: builder.query<GetUsersType, void>({
            query: () => ({
                url: "/user",
            }),
            providesTags: ["Users"],
        }),

        // Mutations

        usersAdd: builder.mutation<GetUsersType, { name: string }>({
            query: (data) => ({
                url: "/user",
                method: "POST",
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
                body: value,
            }),
            invalidatesTags: ["Users"],
        }),

        usersDelete: builder.mutation<GetUsersType, { id: number | undefined }>({
            query: ({ id }) => ({
                url: `/user/${id}`,
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