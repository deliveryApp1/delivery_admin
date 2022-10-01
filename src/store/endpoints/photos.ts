import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "constants/url";
import { PhotosDTO } from "types";


type ResponseType = {
  data: PhotosDTO;
}

export const photosApi = createApi({
  refetchOnReconnect: true,
  reducerPath: `photos`,
  baseQuery: fetchBaseQuery({
    baseUrl
  }),
  tagTypes: ['Photos'],

  endpoints: (builder) => ({
    // Mutations
    createPhoto: builder.mutation<ResponseType, any>({
      query(data) {
        return {
          url: `/photos/`,
          method: `POST`,
          body: data
        };
      },
      invalidatesTags: ['Photos'],
    }),
  }),
});

export const { useCreatePhotoMutation } = photosApi;
