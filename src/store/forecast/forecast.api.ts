import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IDay, IForecastResponse} from "../interfaces";
import {BaseQueryMeta, BaseQueryResult} from "@reduxjs/toolkit/dist/query/baseQueryTypes";

const baseUrl = process.env.BASE_URL;
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
      searchCity: build.query<IDay[], TSearchParams>({
         query: (searchParams: TSearchParams) => {
            console.log('baseUrl-', baseUrl);
            return {
               url: `${searchParams.searchCity}/${searchParams.startDate}/${searchParams.endDate}`,
               params: {
                  unitGroup: 'metric',
                  include: 'days',
                  key: '2DLEMQ8VMWQZ4BRRGN83WXMG7',
                  contentType: 'json'
               }
            }
         },
         transformResponse:(response:IForecastResponse) =>response.days
      }),

   })
})

export const {useSearchCityQuery} = forecastApi