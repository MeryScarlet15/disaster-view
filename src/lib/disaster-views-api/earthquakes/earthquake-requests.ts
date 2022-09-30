import { ApolloClient, gql, NormalizedCacheObject } from "@apollo/client";
import { IEarthquakePropertiesDisasterApi } from "./earthquake-types";

const EARTHQUAKE_PROPERTIES: IEarthquakePropertiesDisasterApi[] = [
  "id", 
  "place_id", 
  "magnitude",
  "latitude",
  "longitude",
  "tsunami",
  "unix_event_time",
  "event_time",
  "created_at",
  "updated_at",
  "deleted_at"
]

export const earthquakesDisasterApi = (client: ApolloClient<NormalizedCacheObject>
) => {

  const getEarthquakes =  (
    parameters: IEarthquakePropertiesDisasterApi[] = EARTHQUAKE_PROPERTIES
  ) => {
    const stringParameters = parameters.toString().replace(/,/g, '\r\n')
    return client.query({
      query: gql`
        query {
          earthquakes {
            ${stringParameters}
          }
        }
      `
    })
  }

  return {
    getEarthquakes
  }
}


