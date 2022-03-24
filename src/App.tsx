import { Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import { apolloClient, GlobalStyles } from 'config';
import { DocumentView, ArtboardView } from 'pages';

export function App() {
  return (
    <GlobalStyles>
      <ApolloProvider client={apolloClient}>
        <Routes>
          <Route path="/share">
            <Route path=":shareId" element={<DocumentView />} />
            <Route path=":shareId/artboard/:artboardId" element={<ArtboardView />} />
          </Route>
        </Routes>
      </ApolloProvider>
    </GlobalStyles>
  );
}
