import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q6qj3e3e5d01w7068p30tj/master',
  cache: new InMemoryCache()
})