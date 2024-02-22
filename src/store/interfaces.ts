export interface IForecastResponse {
   queryCost: number
   latitude: number
   longitude: number
   resolvedAddress: string
   address: string
   timezone: string
   tzoffset: number
   days: IDay[]
   alerts?: any[]
}

export interface IDay {
   datetime: string
   datetimeEpoch: number
   tempmax: number
   tempmin: number
   temp: number
   feelslikemax: number
   feelslikemin: number
   feelslike: number
   dew: number
   humidity: number
   precip: number
   precipprob: number
   precipcover: number
   preciptype: any
   snow: number
   snowdepth: number
   windgust: number
   windspeed: number
   winddir: number
   pressure: number
   cloudcover: number
   visibility: number
   solarradiation: number
   solarenergy: number
   uvindex: number
   severerisk: number
   sunrise: string
   sunriseEpoch: number
   sunset: string
   sunsetEpoch: number
   moonphase: number
   conditions: string
   description: string
   icon: string
   stations: any
   source: string
   hours: IHour[]
}

export interface IHour {
   datetime: string
   datetimeEpoch: number
   temp: number
   feelslike: number
   humidity: number
   dew: number
   precip: number
   precipprob: number
   snow: number
   snowdepth: number
   preciptype: any
   windgust: number
   windspeed: number
   winddir: number
   pressure: number
   visibility: number
   cloudcover: number
   solarradiation: number
   solarenergy: number
   uvindex: number
   severerisk: number
   conditions: string
   icon: string
   stations: any
   source: string
}

export interface IRespPexels {
   page: number
   per_page: number
   photos: IPhoto[]
   total_results: number
   next_page: string
}

export interface IPhoto {
   id: number
   width: number
   height: number
   url: string
   photographer: string
   photographer_url: string
   photographer_id: number
   avg_color: string
   src: IVarImg
   liked: boolean
   alt: string
}

export interface IVarImg {
   original: string
   large2x: string
   large: string
   medium: string
   small: string
   portrait: string
   landscape: string
   tiny: string
}
