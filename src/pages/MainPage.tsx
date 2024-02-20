import React from "react";
import {TSearchParams, useSearchCityQuery} from "../store/forecast/forecast.api";

export function MainPage() {
   const searchObj: TSearchParams = {
      searchCity: 'Odessa',
      startDate: '2024-02-22',
      endDate: '2024-02-23'

   }
   const {isLoading, isError, data} = useSearchCityQuery(searchObj)

   return (
       <div>Home</div>
   )
}