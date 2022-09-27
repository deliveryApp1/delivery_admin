import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from 'constants/url';
import { CategoryDTO } from 'types';

export type GetCategoryType = {
  data: CategoryDTO[];
};
export const categoryApi = createApi({
  refetchOnReconnect: true,
  reducerPath: `shop`,
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('access_token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['ShopMedicines', 'ShopMedicinesTypesOne', 'ShopTypes', 'ShopCart'],

  endpoints: (builder) => ({
    // Queries
    shopMedicines: builder.query<GetCategoryType,
      { type_ides?: string; offset?: number } | void
    >({
      query: (queries) => ({
        url: '/shop/medicines/',
        params: { ...queries },
      }),
      providesTags: ['ShopMedicines'],
    }),

    shopMedicinesTypesById: builder.query<GetCategoryType,
      { id?: number }
    >({
      query: ({ id }) => {
        return {
          url: `/shop/medicines/types/one/?pk=${id}`,
        };
      },
      providesTags: ['ShopMedicinesTypesOne'],
    }),

    shopTypes: builder.query<GetCategoryType, void>({
      query: () => ({
        url: '/shop/types/',
      }),
      providesTags: ['ShopTypes'],
    }),

    shopCart: builder.query<GetCategoryType, void>({
      query: () => ({
        url: '/shop/cart/',
      }),
      providesTags: ['ShopCart'],
    }),

    // Mutations
    shopTypesSearch: builder.mutation<GetCategoryType, { list: string }>({
      query: (data) => ({
        url: '/shop/types/search/',
        method: 'POST',
        body: data,
      }),
    }),

    shopCartAdd: builder.mutation<GetCategoryType, { product: number }>({
      query: (data) => ({
        url: '/shop/cart/',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['ShopCart'],
    }),

    shopCartUpdate: builder.mutation<
    GetCategoryType,
      { id: number; amount: number }
    >({
      query: (data) => ({
        url: '/shop/cart/',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['ShopCart'],
    }),

    shopCartDelete: builder.mutation<GetCategoryType, { id: number }>({
      query: (data) => ({
        url: '/shop/cart/',
        method: 'DELETE',
        body: data,
      }),
      invalidatesTags: ['ShopCart'],
    }),
  }),
});

export const {
  useShopMedicinesQuery,
  useShopMedicinesTypesByIdQuery,
  useShopTypesQuery,
  useShopCartQuery,

  useShopTypesSearchMutation,
  useShopCartAddMutation,
  useShopCartUpdateMutation,
useShopCartDeleteMutation
} = categoryApi;
