import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "constants/url";
import { CategoryDTO, MetaDTO } from 'types';

export type GetCategoryType = {
  data: CategoryDTO[];
  meta: MetaDTO;
  statusCode: number
};
var token = localStorage.getItem("token")
export const categoryApi = createApi({
  refetchOnReconnect: true,
  reducerPath: `category`,
  baseQuery: fetchBaseQuery({
    baseUrl,
    // prepareHeaders: (headers, { getState }) => {
    //   let token = localStorage.getItem("token")
    //   if (token) {
    //     token = JSON.parse(token)
    //     console.log('token: ', token);

    //     headers.set("Authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  tagTypes: ["Category"],

  endpoints: (builder) => ({
    // Queries
    category: builder.query<any, { page?: number, pageSize?: number }>({
      query: (arg) => {
        const { page, pageSize } = arg

        return {
          url: `/category`,
          headers: { "Authorization": `Bearer ${token}` },
          params: { page, pagesize: pageSize }
        }
      },
      providesTags: ["Category"],
    }),

    // Mutations

    categoryAdd: builder.mutation<GetCategoryType, { name: string }>({
      query: (data) => ({
        url: "/category",
        headers: { "Authorization": `Bearer ${token}` },
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),

    categoryUpdate: builder.mutation<
      GetCategoryType,
      { id: number | undefined; value: { name: string } | undefined }
    >({
      query: ({ id, value }) => ({
        url: `/category/${id}`,
        method: "PUT",
        headers: { "Authorization": `Bearer ${token}` },
        body: value,
      }),
      invalidatesTags: ["Category"],
    }),

    categoryDelete: builder.mutation<GetCategoryType, { id: number | undefined }>({
      query: ({ id }) => ({
        url: `/category/${id}`,
        headers: { "Authorization": `Bearer ${token}` },
        method: 'DELETE',
      }),
      invalidatesTags: ['Category'],
    }),
  }),
});

export const {
  useCategoryQuery,
  useCategoryAddMutation,
  useCategoryUpdateMutation,
  useCategoryDeleteMutation
} = categoryApi;