import { configureStore } from '@reduxjs/toolkit';
import { todosApi } from './apis';
import { counterSlice } from './slices/counter';
import { pokemonSlice } from './slices/pokemon';

export const store = configureStore({
  reducer: {
      counter: counterSlice.reducer,
      pokemons: pokemonSlice.reducer,

      [todosApi.reducerPath]: todosApi.reducer, //esto es para colocar los resultados que se van a disparar y necesarios para
      //trabajr con los hooks de todosApi.js
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware() //funcion que se ejcuta antes que otra
    .concat( todosApi.middleware )
})