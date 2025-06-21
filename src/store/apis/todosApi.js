import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todos",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos", // esto se concatena en el baseUrl. Tambien puede verse o como el cache. Inspeccionar el redux en las herramientas de desarrollo del navegador
    }),

    getTodo: builder.query({
      query: (todoId) => `/todos/${todoId}`, // esto se concatena en el baseUrl. Tambien puede verse o como el cache. Inspeccionar el redux en las herramientas de desarrollo del navegador
    }),
  }),
});

export const { useGetTodosQuery, useGetTodoQuery } = todosApi; //crea custom hooks que se van a usar en otra parte
