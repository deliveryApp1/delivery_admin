import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "constants/url";
import { CategoryDTO } from 'types';

export type GetCategoryType = {
  data: CategoryDTO[];
  statusCode: number
};
export const categoryApi = createApi({
  refetchOnReconnect: true,
  reducerPath: `category`,
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["Category"],

  endpoints: (builder) => ({
    // Queries
    category: builder.query<GetCategoryType, void>({
      query: () => ({
        url: "/category",
      }),
      providesTags: ["Category"],
    }),

    // Mutations

    categoryAdd: builder.mutation<GetCategoryType, { name: string }>({
      query: (data) => ({
        url: "/category",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),

    categoryUpdate: builder.mutation<
      GetCategoryType,
      { id: number | undefined; value:{name:string} | undefined }
    >({
      query: ({ id, value }) => ({
        url: `/category/${id}`,
        method: "PUT",
        body: value,
      }),
      invalidatesTags: ["Category"],
    }),

    categoryDelete: builder.mutation<GetCategoryType, { id: number | undefined}>({
      query: ({id}) => ({
        url: `/category/${id}`,
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