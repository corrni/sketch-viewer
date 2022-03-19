import { ApolloClient, InMemoryCache } from '@apollo/client';

if (!process.env.REACT_APP_GRAPHQL_ENDPOINT) {
  throw new Error('Missing GraphQL endpoint configuration. Check your `.env` file.');
}

export const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});
