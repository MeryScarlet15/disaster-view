export interface IEarthquakeDisasterApi {
  id: number, 
  place_id: number, 
  magnitude: string,
  latitude: string,
  longitude: string,
  tsunami: boolean,
  unix_event_time: number,
  event_time: string,
  created_at: number,
  updated_at: number,
  deleted_at?: number
}

export type IEarthquakePropertiesDisasterApi = keyof IEarthquakeDisasterApi