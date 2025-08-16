import { configureStore } from "@reduxjs/toolkit";
import  crudApi  from "./api/crudApi";
import authApi from "./api/authApi";


console.log('crudApi.middleware:', crudApi.middleware);
console.log('authApi.middleware:', authApi.middleware);


export const store = configureStore({
    reducer: {
        [crudApi.reducerPath]: crudApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(crudApi.middleware, authApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;