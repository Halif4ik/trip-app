import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.REACT_APP_BASE_URL;
export type TSearchParams = {
   searchCity: string
   startDate: string
   endDate: string
}
export const forecastApi = createApi({
   reducerPath: 'forecast/api',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'
   }),
   refetchOnFocus: true,
   endpoints: build => ({
      searchCity: build.query<any, TSearchParams>({
         query: (searchParams: TSearchParams) => {
            console.log('baseUrl-', baseUrl);
            return {
               url: `${searchParams.searchCity},UA/${searchParams.startDate}/${searchParams.endDate}`,
               params: {
                  key: '2DLEMQ8VMWQZ4BRRGN83WXMG7',
               }
            }
         },
      }),

   })
})

export const {useSearchCityQuery} = forecastApi