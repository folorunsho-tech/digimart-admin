import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsAPI = createApi({
  reducerPath: "productsAPI",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (page = 1) => `products?page=${page}&limit=10`,
    }),
    getProduct: builder.query({
      query: (id) => `products/${id}`,
    }),

    createProduct: builder.mutation({
      query: ({ name, price, image, description, author, sku, id }) => ({
        url: "products",
        method: "POST",
        body: { name, price, image, description, author, sku, id },
      }),
    }),
    EditProduct: builder.mutation({
      query: ({ name, price, image, description, id }) => ({
        url: `products`,
        method: "PATCH",
        body: { name, price, image, description, id },
      }),
    }),
    DeleteProduct: builder.mutation({
      query: ({ id }) => ({
        url: `products`,
        method: "DELETE",
        body: { id },
      }),
    }),
  }),
});
export const {
  useCreateProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
  useGetProductQuery,
  useGetProductsQuery,
} = productsAPI;
