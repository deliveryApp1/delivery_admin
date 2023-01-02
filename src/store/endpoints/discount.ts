import { DiscountDTO } from 'types';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "constants/url";

export type GetDiscountType = {
  data: DiscountDTO[];
  statusCode: number,
  meta: { page: number, total: number, pagesize: number }
};

var token = localStorage.getItem("token")
export const discountApi = createApi({
  refetchOnReconnect: true,
  reducerPath: `discount`,
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
  tagTypes: ["Discount"],

  endpoints: (builder) => ({
    // Queries
    discount: builder.query<GetDiscountType, { page?: number; pagesize?: number; } | void>({
      query: (queries) => ({
        url: "/discount",
        params: { ...queries },
        headers: { "Authorization": `Bearer ${token}` },
      }),
      providesTags: ["Discount"],
    }),

    // Mutations

    discountAdd: builder.mutation<GetDiscountType, { title: string | undefined, description: string | undefined, image: string | undefined }>({
      query: (data) => ({
        url: "/discount",
        method: "POST",
        headers: { "Authorization": `Bearer ${token}` },
        body: data,
      }),
      invalidatesTags: ["Discount"],
    }),


    discountUpdate: builder.mutation<
      GetDiscountType,
      { id: number | undefined; value: { title: string, image: string, description: string } }
    >({
      query: ({ id, value }) => ({
        url: `/discount/${id}`,
        method: "PUT",
        headers: { "Authorization": `Bearer ${token}` },
        body: value,
      }),
      invalidatesTags: ["Discount"],
    }),

    discountDelete: builder.mutation<GetDiscountType, { id: number | undefined }>({
      query: ({ id }) => ({
        url: `/discount/${id}`,
        headers: { "Authorization": `Bearer ${token}` },
        method: 'DELETE',
      }),
      invalidatesTags: ['Discount'],
    }),
  }),
});

export const {
  useDiscountQuery,
  useDiscountAddMutation,
  useDiscountUpdateMutation,
  useDiscountDeleteMutation
} = discountApi;