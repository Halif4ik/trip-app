import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IDataForTrip} from "../interfaces";

interface PexelsState {
  myTrips: IDataForTrip[]
}

const initialState: PexelsState = {
  myTrips: JSON.parse(localStorage.getItem('reactTrip') || '[]')
}

export const imagesSlice = createSlice({
  name: 'pexels',
  initialState,
  reducers: {
    addTrip(state, payloadAct: PayloadAction<IDataForTrip>) {
      state.myTrips.push(payloadAct.payload)
      localStorage.setItem('reactTrip', JSON.stringify(state.myTrips))
    },
  }
})

export const imagesPexelsActions = imagesSlice.actions
export const imagesPexelsReducer = imagesSlice.reducer