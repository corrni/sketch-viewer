import { useQuery } from '@apollo/client';
import React, { useMemo, useState } from 'react';
import { useContext } from 'react';
import {
  DocumentShare,
  DocumentSharePayload,
  DocumentShareVariables,
  GET_SHARED_DOCUMENT,
} from './getSharedDocument.graphql';

interface ContextValue {
  share: DocumentShare | null;
  loading: boolean;
  setShareId: (shareId: string) => void;
}

const DocumentContext = React.createContext<ContextValue | null>(null);

export const DocumentProvider: React.FC = ({ children }) => {
  const [shareId, setShareId] = useState('');

  const { data, loading } = useQuery<DocumentSharePayload, DocumentShareVariables>(GET_SHARED_DOCUMENT, {
    variables: {
      shareId,
    },
    skip: !shareId,
  });

  const value = useMemo(
    () => ({
      loading,
      share: data?.share ?? null,
      setShareId,
    }),
    [data?.share, loading]
  );

  return <DocumentContext.Provider value={value}>{children}</DocumentContext.Provider>;
};

export const useDocumentContext = () => {
  const context = useContext(DocumentContext);

  if (context == null) {
    throw new Error('No context value');
  }

  return context;
};
