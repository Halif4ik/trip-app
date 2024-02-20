import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {forecastApi} from "./forecast/forecast.api";
import {forecastReducer} from "./forecast/forecast.slice";

export const store = configureStore({
  reducer: {
    [forecastApi.reducerPath]: forecastApi.reducer,
    forecast: forecastReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(forecastApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>