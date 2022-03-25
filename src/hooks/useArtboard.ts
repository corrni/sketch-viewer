import { useDocument } from './useDocument';

export function useArtboard({ shareId, artboardId }: { artboardId?: string; shareId?: string }) {
  const { artboards: entries, loading, notFound } = useDocument(shareId);

  if (!artboardId) {
    return {
      artboard: null,
      artboardCount: 0,
      artboardIndex: -1,
      loading,
      nextArtboard: null,
      notFound,
      previousArtboard: null,
    };
  }

  const artboardIndex = entries.findIndex((artboard) => artboard.shortId === artboardId);
  const artboard = artboardIndex !== -1 ? entries[artboardIndex] : null;

  const hasPrevious = artboardIndex > 0;
  const hasNext = artboardIndex !== -1 && artboardIndex < entries.length - 1;

  const previousArtboard = hasPrevious ? entries[artboardIndex - 1] : null;
  const nextArtboard = hasNext ? entries[artboardIndex + 1] : null;

  return {
    artboard,
    artboardCount: entries.length,
    artboardIndex,
    loading,
    nextArtboard,
    notFound: notFound || artboard === null,
    previousArtboard,
  };
}
