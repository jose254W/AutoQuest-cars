import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: `https://autoquest-backend-production.up.railway.app/graphql` as any,
  cache: new InMemoryCache(),
});