import { ApolloClient, InMemoryCache } from "@apollo/client"
import { earthquakesDisasterApi } from "./earthquakes/earthquake-requests"


const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache()
})



export default {
  earthquakes: earthquakesDisasterApi(client)
} 