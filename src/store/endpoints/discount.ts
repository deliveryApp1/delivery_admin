import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "constants/url";
import { DiscountDTO } from "types";

export type GetDiscountType = {
  data: DiscountDTO[];
  statusCode: number
};
export const discountApi = createApi({
  refetchOnReconnect: true,
  reducerPath: `discount`,
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["Discount"],

  endpoints: (builder) => ({
    // Queries
    discount: builder.query<GetDiscountType, { page?: number; pagesize?: number;} | void>({
      query: (queries) => ({
        url: "/discount",
        params : {...queries}
      }),
      providesTags: ["Discount"],
    }),

    // Mutations

    discountAdd: builder.mutation<GetDiscountType, DiscountDTO>({
      query: (data) => ({
        url: "/discount",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Discount"],
    }),


    // discountUpdate: builder.mutation<
    //   GetDiscountType,
    //   { id: number | undefined; value:{name:string} | undefined }
    // >({
    //   query: ({ id, value }) => ({
    //     url: `/discount/${id}`,
    //     method: "PUT",
    //     body: value,
    //   }),
    //   invalidatesTags: ["Discount"],
    // }),

    discountDelete: builder.mutation<GetDiscountType, { id: number | undefined}>({
      query: ({id}) => ({
        url: `/discount/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Discount'],
    }),
  }),
});

export const {
  useDiscountQuery,
  useDiscountAddMutation,
  // useDiscountUpdateMutation,
  useDiscountDeleteMutation
} = discountApi;