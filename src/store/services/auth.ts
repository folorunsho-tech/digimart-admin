import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authAPI = createApi({
  reducerPath: "authApi",
  tagTypes: ["Auth"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: ({ email, username, password }) => ({
        url: "auth/signup",
        method: "POST",
        body: { email, username, password },
      }),
    }),
    signIn: builder.mutation({
      query: ({ email, password }) => ({
        url: "auth/signin",
        method: "POST",
        body: { email, password },
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = authAPI;
