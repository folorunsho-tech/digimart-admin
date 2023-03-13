import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const storeAPI = createApi({
  reducerPath: "storeAPI",
  tagTypes: ["Store"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (builder) => ({
    GetStore: builder.query({
      query: ({ store_id }) => `store/${store_id}`,
    }),

    GetStores: builder.query({
      query: (owner_id) => `store/${owner_id}`,
    }),

    CreateStore: builder.mutation({
      query: ({ store_name, store_description, store_tagline, owner_id }) => ({
        url: "store/createstore",
        method: "POST",
        body: { store_name, store_description, store_tagline, owner_id },
      }),
    }),

    UpdateStore: builder.mutation({
      query: ({ data, store_id }) => ({
        url: "store/updatestore",
        method: "PATCH",
        body: { data, store_id },
      }),
    }),

    DeleteStore: builder.mutation({
      query: ({ store_id, uid }) => ({
        url: "store/deletestore",
        method: "DELETE",
        body: { store_id, uid },
      }),
    }),
  }),
});

export const {
  useCreateStoreMutation,
  useUpdateStoreMutation,
  useDeleteStoreMutation,
  useGetStoreQuery,
  useGetStoresQuery,
} = storeAPI;
