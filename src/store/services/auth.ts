import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authAPI = createApi({
  reducerPath: "authApi",
  tagTypes: ["Auth"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: ({ email, username, password }) => ({
        url: "auth/signup",
        method: "POST",
        body: { email, username, password },
      }),
    }),
    LogIn: builder.mutation({
      query: ({ email, password }) => ({
        url: "auth/login",
        method: "POST",
        body: { email, password },
      }),
    }),
  }),
});

export const { useSignUpMutation, useLogInMutation } = authAPI;
