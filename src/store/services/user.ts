import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAPI = createApi({
  reducerPath: "userAPI",
  tagTypes: ["user"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (page = 1) => `users?page=${page}&limit=10`,
    }),
    getUser: builder.query({
      query: (id) => `user/${id}`,
    }),

    createUser: builder.mutation({
      query: ({ name, profile_image, description, displayName, id }) => ({
        url: "user",
        method: "POST",
        body: { name, profile_image, description, displayName, id },
      }),
    }),
    EditUser: builder.mutation({
      query: ({ name, profile_image, description, displayName, id }) => ({
        url: `user`,
        method: "PATCH",
        body: { name, profile_image, description, displayName, id },
      }),
    }),
    DeleteUser: builder.mutation({
      query: ({ id }) => ({
        url: `user`,
        method: "DELETE",
        body: { id },
      }),
    }),
  }),
});
export const {
  useCreateUserMutation,
  useDeleteUserMutation,
  useEditUserMutation,
  useGetUserQuery,
  useGetUsersQuery,
} = userAPI;
