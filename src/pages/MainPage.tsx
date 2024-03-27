import React, {useEffect, useState, useCallback} from "react";
import {IDay} from "../store/interfaces";
import {TSearchParams, useSearchCityQuery} from "../store/forecast/forecast.api";
import {useLazySearchCityQuery} from "../store/images/images.api";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store";
import {TripCart} from "../component/TripCart";
import {AddTrip} from "../component/AddTrip";

export function MainPage() {
   const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
   const [showWeatherForTrip, setShowWeatherForTrip] = useState<IDay[]>([]);

   const searchObj: TSearchParams = {
      searchCity: 'Odessa',
      startDate: '2024-02-22',
      endDate: '2024-02-28'
   };

   const [searchForecast, setStateForecast] = useState('');
   const [dropdown, setDropdown] = useState(false);
   const [freez, setFreez] = useState('');
   const [manualSearchInput, setManualSearchInput] = useState('');
   const [startDate, setStartDate] = useState('');
   const [endDate, setEndDate] = useState('');

   const {myTrips} = useAppSelector(state => state.pexelsRed);

   const {isLoading, isError, data: forecastData} = useSearchCityQuery({
      startDate: startDate || searchObj.startDate,
      endDate: endDate || searchObj.endDate,
      searchCity: freez,
   }, {
      skip: freez.length < 4,
      refetchOnFocus: true
   });

   useEffect(() => {
      const handler: NodeJS.Timeout = setTimeout(() => setFreez(searchForecast), 800);
      return () => clearTimeout(handler);
   }, [searchForecast]);

   useEffect(() => {
      setDropdown(freez.length > 4 && !!forecastData && forecastData.days.length > 0);
   }, [freez, forecastData]);

   const clickHandler = (dataForecast: any) => {
      const temp = fetchToPexels(dataForecast.address);
      setDropdown(false);
   };

   const [fetchToPexels, {isLoading: isPexelsLoading, data: pexelsData}] = useLazySearchCityQuery();

   const handleManualSearch = useCallback(() => {
      setFreez(manualSearchInput);
   }, [manualSearchInput]);

   const handleShowWeather = (days: IDay[]) => {
      setShowWeatherForTrip(days);
   };

   const renderWeatherForTrips = () => {
      if (showWeatherForTrip.length === 0) return null;
      return (
          <div className="weather-for-trips">
             {showWeatherForTrip.map((day, index) => (
                 <div key={index} className="weather-item">
                    <div key={day.datetime} className="weather-item">
                       <h3>Date: {day.datetime}</h3>
                       <p>{day.icon}</p>
                       <p>{day.tempmax}/{day.tempmin}</p>
                    </div>
                 </div>
             ))}
          </div>
      );
   };

   return (
       <section className="flex pt-10 mx-auto w-screen flex-row flex-wrap justify-center">
          {isError && <p className="text-center text-red-600">Wrong city name...</p>}
          <div className="relative w-[1000px] flex justify-center flex-wrap">
             <div className="w-full h-fit flex justify-center">
                <input
                    type="text"
                    className="border py-2 px-4 w-1/2 h-[42px] m-2 "
                    placeholder="Please select sity"
                    value={searchForecast}
                    onChange={e => setStateForecast(e.target.value)}
                />
                <input
                    type="date"
                    className="border py-2 px-4 w-1/2 h-[42px] m-2 "
                    placeholder="Select date"
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                />
                <input
                    type="date"
                    className="border py-2 px-4 w-1/2 h-[42px] m-2 "
                    placeholder="Select date"
                    value={endDate}
                    onChange={e => setEndDate(e.target.value)}
                />
                <button
                    className="mx-10 w-40 rounded h-10 bg-blue-400 hover:text-white transition-colors cursor-pointer"
                    onClick={() => clickHandler(forecastData)}>Add trip
                </button>
             </div>

             {dropdown &&
                 <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
                    {isLoading && <p className="text-center">Loading...</p>}
                    {forecastData?.days &&
                        <li key={forecastData?.days[0].datetime}
                            onClick={() => clickHandler(forecastData)}
                            className="py-2 px-4 hover:bg-gray-300 hover:text-white transition-colors cursor-pointer"
                        >{forecastData.resolvedAddress}: {forecastData?.days[0].temp}°С</li>
                    }
                 </ul>}
             <div className="container-trips flex row-end-1 w-6/7 my-11 max-h-96">
                {isPexelsLoading && <p className="text-center">Loading from Pexels...</p>}
                {(pexelsData && pexelsData[0] && pexelsData[0].city && forecastData?.days) &&
                    <AddTrip
                        pexelsDataEl={{
                           medium: pexelsData[0].src.medium, city: pexelsData[0].city, days: forecastData?.days
                        }}/>}
             </div>
          </div>
          {myTrips.length && <>
             <h1 className="text-lg font-bold "> List of trips</h1>
             <div className="w-full h-96 flex justify-center">
                <ul className="list-none w-full flex top-[42px] left-0 right-0 shadow-md bg-white">
                   {myTrips.map((oneTrip, index) =>
                       <TripCart
                           pexelsDataEl={{
                              medium: oneTrip.medium,
                              city: oneTrip.city, days: oneTrip.days
                           }} key={index} onShowWeather={handleShowWeather}
                       />
                   )}
                </ul>
             </div>

             {renderWeatherForTrips()}
          </>}
       </section>
   );
}
