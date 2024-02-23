import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IPhoto, IRespPexels} from "../interfaces";


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
                  orientation: 'landscape',
               },
               headers: {
                  authorization: 'Lvll9NRH1u7SSbUyV9rba1EIGRcuOT384Xyp2GbKUJfQI7wfxNc64ELG'
               }
            }
         },
         transformResponse: (response: IRespPexels) => {
            const url: URL = new URL(response.next_page);

            const resultPhotos: IPhoto[] = response.photos.map(photoObj => {
               return {...photoObj, city: url.searchParams.get('query') || ''};
            });
            return resultPhotos;
         }

      }),

   })
})
export const {useSearchCityQuery, useLazySearchCityQuery} = cityImagesApi