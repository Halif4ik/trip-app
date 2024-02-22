import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IDay, IForecastResponse, IPhoto, IRespPexels} from "../interfaces";
import {BaseQueryMeta, BaseQueryResult} from "@reduxjs/toolkit/dist/query/baseQueryTypes";


export const cityImagesApi = createApi({
   reducerPath: 'cityImg/api',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://api.pexels.com/v1/search'
   }),
   refetchOnFocus: true,
   endpoints: build => ({
      searchCity: build.query<IPhoto[], string>({
         query: (cityName: string) => {
            return {
               url: ``,
               params: {
                  query: cityName,
                  locale: 'uk-UA',
                  per_page: 2,
               },
               headers: {
                  authorization: 'Lvll9NRH1u7SSbUyV9rba1EIGRcuOT384Xyp2GbKUJfQI7wfxNc64ELG'
               }
            }
         },
         transformResponse:(response:IRespPexels) =>response.photos
      }),

   })
})
export const {useSearchCityQuery,useLazySearchCityQuery} = cityImagesApi