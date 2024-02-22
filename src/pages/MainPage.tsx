import React, {useEffect, useState} from "react";
import {TSearchParams, useSearchCityQuery} from "../store/forecast/forecast.api";
import {useLinkClickHandler} from "react-router-dom";
import {useLazySearchCityQuery} from "../store/images/images.api";
import {TripCard} from "../component/TripCart";

export function MainPage() {
   const searchObj: TSearchParams = {
      searchCity: 'Odessa',
      startDate: '2024-02-22',
      endDate: '2024-02-28'
   }
   const [searchForecast, setStateForecast] = useState('')
   const [dropdown, setDropdown] = useState(false)
   const [freez, setFreez] = useState('');

   const {isLoading, isError, data} = useSearchCityQuery({
          ...searchObj,
          searchCity: freez,
       },
       {
          skip: freez.length < 4,
          refetchOnFocus: true
       });

   useEffect(() => {
      const handler: NodeJS.Timeout = setTimeout(() => setFreez(searchForecast), 2000);
      return () => clearTimeout(handler);
   }, [searchForecast]);

   useEffect(() => {
      console.log('useEffect-', freez);
      setDropdown(freez.length > 4 && !!data && data.days.length > 0);
   }, [freez, data]);

   const clickHandler = (dataForecast: any) => {
      const temp = fetchToPexels(dataForecast.address);
      console.log('fetchToPexels!-', temp);
      console.log('isPexelsLoading-', isPexelsLoading);
   };
   /*city*/
   const [fetchToPexels, {isLoading: isPexelsLoading, data: pexelsData}] = useLazySearchCityQuery();


   return (
       <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
          {isError && <p className="text-center text-red-600">Wrong city name...</p>}

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
                    {data?.days.map(oneDay => (
                        <li key={oneDay.datetime}
                            onClick={() => clickHandler(data)}
                            className="py-2 px-4 hover:bg-gray-300 hover:text-white transition-colors cursor-pointer"
                        >{data.resolvedAddress}-:{oneDay.temp}</li>
                    ))}
                 </ul>}

             {/*<ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
                {imagesLoading && <p className="text-center">Loading images...</p>}
                {imagesData && imagesData.map(imageUrl => (
                    <li key={imageUrl}><img src={imageUrl} alt="City"/></li>
                ))}
                {imagesError && <p className="text-center text-red-600">Failed to load images</p>}
             </ul>*/}
             <div className="container">
                {isPexelsLoading && <p className="text-center">Loading from Pexels...</p>}
                {pexelsData?.map(pexelsDataEl => <TripCard pexelsDataEl={pexelsDataEl} key={pexelsDataEl.id}/>)}
             </div>


          </div>
       </div>
   )
}