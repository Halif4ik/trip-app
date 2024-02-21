import React, {useEffect, useState} from "react";
import {TSearchParams, useSearchCityQuery} from "../store/forecast/forecast.api";

export function MainPage() {
   const searchObj: TSearchParams = {
      searchCity: 'Odessa',
      startDate: '2024-02-22',
      endDate: '2024-02-28'
   }
   const [searchForecast, setStateForecast] = useState('')
   const [dropdown, setDropdown] = useState(false)
   const [debounced, setDebounced] = useState('');

   const {isLoading, isError, data} = useSearchCityQuery({
          ...searchObj,
          searchCity: debounced,
       },
       {
          skip: debounced.length < 4,
          refetchOnFocus: true
       });

   useEffect(() => {
      const handler: NodeJS.Timeout = setTimeout(() => setDebounced(searchForecast), 1300);
      return () => clearTimeout(handler);
   }, [searchForecast]);

   useEffect(() => {
      console.log('useEffect-', debounced);
      setDropdown(debounced.length > 4 && !!data && data.length > 0);
   }, [debounced, data]);

   return (
       <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
          {isError && <p className="text-center text-red-600">Something went wrong...</p>}

          <div className="relative w-[660px]">
             <input
                 type="text"
                 className="border py-2 px-4 w-full h-[42px] mb-2"
                 placeholder="Search for city in weather.visualcrossing..."
                 value={searchForecast}
                 onChange={e => setStateForecast(e.target.value)}
             />
             {dropdown &&
                 <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
                    {isLoading && <p className="text-center">Loading...</p>}
                    {data?.map(oneDay => (
                        <li key={oneDay.datetime}
                            className="py-2 px-4 hover:bg-gray-400 hover:text-white transition-colors cursor-pointer"
                        >temp-:{oneDay.temp}</li>
                    ))}
                 </ul>}


             {/*  <div className="container">
                { areReposLoading && <p className="text-center">Repos are loading...</p> }
                { repos?.map(repo => <RepoCard repo={repo} key={repo.id} />) }
             </div>*/}
          </div>

       </div>
   )
}