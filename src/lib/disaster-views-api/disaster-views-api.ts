import { ApolloClient, InMemoryCache } from "@apollo/client"
import { earthquakesDisasterApi } from "./earthquakes/earthquake-requests"

const client = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache()
})

console.log('...',process.env.API_URL)


export default {
  earthquakes: earthquakesDisasterApi(client)
} 