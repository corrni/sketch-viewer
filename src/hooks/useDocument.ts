import { useQuery } from '@apollo/client';

import { GET_SHARED_DOCUMENT } from './getSharedDocument.graphql';
import { DocumentSharePayload, DocumentShareVariables } from './types';

export function useDocument(shareId?: string) {
  const { data, loading, error } = useQuery<DocumentSharePayload, DocumentShareVariables>(GET_SHARED_DOCUMENT, {
    variables: {
      shareId: shareId!,
    },
    skip: !shareId,
  });

  return {
    loading,
    name: data?.share?.version.document.name ?? null,
    artboards: data?.share?.version.document.artboards.entries || [],
    error,
    notFound: !loading && Boolean(error?.message.match(/not found/)),
  };
}
