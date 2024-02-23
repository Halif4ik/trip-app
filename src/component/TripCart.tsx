import React from 'react';
import { IDataForTrip, IDay } from "../store/interfaces";

interface TripCartProps {
   pexelsDataEl: IDataForTrip;
   onShowWeather: (days: IDay[]) => void;
}

export function TripCart({ pexelsDataEl, onShowWeather }: TripCartProps) {
   return (
       <li className="border py-2 px-2 rounded m-2 hover:shadow-md hover:bg-gray-100 transition-all">
          <img className="font-bold max-h-36" src={pexelsDataEl.medium} alt={pexelsDataEl.city} />
          <h2 className="capitalize text-lg  px-2 mr-2 rounded hover:shadow-md transition-all">
             {pexelsDataEl.city}
          </h2>
          {pexelsDataEl?.days && <p className="py-2 px-2 mr-2 rounded hover:shadow-md transition-all">
             {pexelsDataEl?.days[0].datetime}
          </p>}
          {pexelsDataEl?.days && <p className="py-2 px-2 mr-2 rounded hover:shadow-md transition-all">
             {pexelsDataEl?.days[pexelsDataEl.days.length - 1].datetime}
          </p>}

          <button
              className="py-2 px-4 bg-yellow-200 mr-2 rounded hover:shadow-md transition-all"
              onClick={() => onShowWeather(pexelsDataEl.days)} // Trigger onShowWeather when button is clicked
          >
             Show Weather
          </button>
       </li>
   );
}
