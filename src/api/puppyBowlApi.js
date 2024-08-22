// Import createApi (function to create an API service) and fetchBaseQuery (a basic fetch wrapper)
// from Redux Toolkit Query's React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define an API using createApi
export const puppyBowlApi = createApi({
  // Unique string used in constructing Redux action types, state selectors, and React hook names
  reducerPath: "puppyBowlApi", //reducerPath is optional
  // Define a base query function that all endpoints will use as the base of their request
  baseQuery: fetchBaseQuery({
    // The base URL for all requests
    baseUrl:"https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT", 
  }),
  // Define endpoints for our API service
  endpoints: (builder) => ({ 
    // Define an endpoint that fetches players
    fetchPlayers: builder.query({
      // The part of the URL that comes after the baseUrl for this specific endpoint
      query:()=> "/players"
    }),
  }),
});

// Export hooks for each endpoint - in this case, a React hook that triggers the fetchPlayers query
export const {useFetchPlayersQuery} = puppyBowlApi


/* createapi is a function that takes an object as an argument this object has properties like but not limited to 
reducerpath, baseurl, endpoints. In this createapi function we are defining the properties of the object it uses.
createapi is returning this object (the one we just made) as pupplybowlapi 

puppybowlapi is an object returned by createapi, For each query or mutation you define in the endpoints function, 
createApi generates a corresponding React hook {usefetchplayersquery }that can be imported to other components after we export it.

  */