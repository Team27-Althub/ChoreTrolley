// 'use client'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const crudApi = createApi({
  reducerPath: 'crudApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://choretrolley-apiservice-production.up.railway.app',
    prepareHeaders: (headers) => {
      const users = localStorage.getItem('user');
      const token = users ? JSON.parse(users).token : null;

      if (token) {
        headers.set('Authorization', `bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchResource: builder.query({
      query: (url) => url,
    }),
    createResource: builder.mutation({
      query: ({ url, data }) => ({
        url,
        method: 'POST',
        body: data,
      }),
    }),
    editResource: builder.mutation({
      query: ({ url, data }) => ({
        url,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteResource: builder.mutation({
      query: (url) => ({
        url,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useFetchResourceQuery, 
  useDeleteResourceMutation, 
  useCreateResourceMutation, 
  useEditResourceMutation} = crudApi;

  export default crudApi