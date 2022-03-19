import { ApolloProvider } from '@apollo/client';

import { apolloClient } from 'config';

export function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div>Sketch document viewer</div>
    </ApolloProvider>
  );
}
