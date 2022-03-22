import { Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import { apolloClient, GlobalStyles } from 'config';
import { DocumentProvider, EnsureSketchDocument } from 'context';
import { DocumentView, ArtboardView } from 'pages';

export function App() {
  return (
    <GlobalStyles>
      <ApolloProvider client={apolloClient}>
        <DocumentProvider>
          <Routes>
            <Route path="/share" element={<EnsureSketchDocument />}>
              <Route path=":shareId" element={<DocumentView />} />
              <Route path=":shareId/artboard/:artboardId" element={<ArtboardView />} />
            </Route>
          </Routes>
        </DocumentProvider>
      </ApolloProvider>
    </GlobalStyles>
  );
}
