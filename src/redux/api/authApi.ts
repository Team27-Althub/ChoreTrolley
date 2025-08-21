// 'use client'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError, BaseQueryApi } from '@reduxjs/toolkit/query';

// --- Token response type ---
type RefreshResponse = {
  accessToken: string;
  refreshToken?: string;
};

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
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api: BaseQueryApi, extraOptions) => {
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
        const { accessToken, refreshToken: newRefreshToken } = refreshResult.data as RefreshResponse;

        // Save new tokens
        sessionStorage.setItem("accessToken", accessToken);
        if (newRefreshToken) {
          sessionStorage.setItem("refreshToken", newRefreshToken);
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
        url: "/auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useLogoutMutation } = authApi;
export default authApi;
