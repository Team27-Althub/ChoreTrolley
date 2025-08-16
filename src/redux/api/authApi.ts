// 'use client'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authApi = createApi ({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://choretrolley-apiservice-production.up.railway.app',
        prepareHeaders: (headers) => {
            // const users = localStorage.getItem('user')
            // const token = users? JSON.parse(users).token : null

            // if (token) {
            //     headers.set('Authorization', `bearer ${token}`)
            // }

            // return headers
        }
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth/sign-in',
                body: credentials,
                method: 'POST',
            })
        }),
        signup: builder.mutation({
            query: (credentials) => ({
                url: '/auth/register',
                body: credentials,
                method: 'POST',
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: '',
                method: 'POST'
            })
        })
    })

})

export const {
    useLoginMutation,
    useSignupMutation, 
    useLogoutMutation
} = authApi

export default authApi