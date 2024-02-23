import React from 'react'
import {IDataForTrip} from "../store/interfaces";
import {imagesPexelsActions} from "../store/images/images.slice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {RootState} from "../store";

export function AddTrip({pexelsDataEl}: { pexelsDataEl: IDataForTrip }) {
   const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

   const useActions = () => {
      const dispatch = useDispatch()
      return bindActionCreators({...imagesPexelsActions}, dispatch)
   }
   const {addTrip} = useActions()

   /*add trip to reducer*/
   const addToList = (event: React.MouseEvent<HTMLButtonElement>): void => {
      event.preventDefault()
      const dataForTrip: IDataForTrip ={
         days: pexelsDataEl.days,
         medium: pexelsDataEl.medium,
         city:pexelsDataEl.city
      }
      addTrip(dataForTrip);

   }

   return (
       <li className="border py-2 px-2 rounded m-2 hover:shadow-md hover:bg-gray-100 transition-all">
          <div >
             <img className="font-bold max-h-36" src={pexelsDataEl.medium}></img>
             <h2 className="capitalize text-lg  px-2 mr-2 rounded hover:shadow-md transition-all">
                {pexelsDataEl.city}</h2>
             {pexelsDataEl?.days && <p className="py-2 px-2 mr-2 rounded hover:shadow-md transition-all"
             >{pexelsDataEl?.days[0].datetime}</p>}
             {pexelsDataEl?.days && <p className="py-2 px-2 mr-2 rounded hover:shadow-md transition-all"
             >{pexelsDataEl?.days[pexelsDataEl.days.length - 1].datetime}</p>}

             <button
                 className="py-2 px-4 bg-yellow-200 mr-2 rounded hover:shadow-md transition-all"
                 onClick={addToList}>Add trip
             </button>

          </div>
       </li>
   )
}