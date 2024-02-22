import React, {useState} from 'react'
import {IPhoto} from "../store/interfaces";

export function TripCard({pexelsDataEl}: { pexelsDataEl: IPhoto }) {

   return (
       <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
          <a href={pexelsDataEl.src.large2x} target="_blank">
             <h2 className="text-lg font-bold">{pexelsDataEl.alt}</h2>
             <p className="text-sm">
                Forks: <span className="font-bold mr-2">{pexelsDataEl.src.original}</span>
             </p>

             <p className="py-2 px-4 bg-yellow-400 mr-2 rounded hover:shadow-md transition-all"
             >{pexelsDataEl?.id}</p>

          </a>
       </div>
   )
}