import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {forecastApi} from "./forecast/forecast.api";
import {cityImagesApi} from "./images/images.api";
import {imagesPexelsReducer} from "./images/images.slice";

export const store = configureStore({
   reducer: {
      [forecastApi.reducerPath]: forecastApi.reducer,
      [cityImagesApi.reducerPath]: cityImagesApi.reducer,
      pexelsRed: imagesPexelsReducer
   },
   middleware: getDefaultMiddleware =>
       getDefaultMiddleware().concat(forecastApi.middleware).concat(cityImagesApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>