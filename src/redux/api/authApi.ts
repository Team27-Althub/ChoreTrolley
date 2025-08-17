// 'use client'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// --- Base query setup ---
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://choretrolley-apiservice-production.up.railway.app',
  prepareHeaders: (headers) => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// --- Base query with re-auth handling ---
const baseQueryWithReauth = async (
  args: any,
  api: { dispatch: any; getState: any },
  extraOptions: any
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshToken = sessionStorage.getItem("refreshToken");

    if (refreshToken) {
      const refreshResult = await baseQuery(
        {
          url: "/auth/refresh-token",       
          method: "POST",
          body: { refreshToken },      
        },
        api,
        extraOptions
      );

      if (refreshResult.data) {
        // Save new tokens
        sessionStorage.setItem("accessToken", refreshResult.data.accessToken);
        if (refreshResult.data.refreshToken) {
          sessionStorage.setItem("refreshToken", refreshResult.data.refreshToken);
        }

        // Retry the original request with the new token
        result = await baseQuery(args, api, extraOptions);
      } else {
        // Refresh failed → clear session
        sessionStorage.clear();
      }
    }
  }

  return result;
};

// --- Auth API ---
const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: credentials,
      }),
    }),
    signup: builder.mutation({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout", // ✅ change if your backend uses a different path
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useLogoutMutation,
} = authApi;

export default authApi;
