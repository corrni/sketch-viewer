import { Artboard } from './types';
import { useDocument } from './useDocument';

const emptyValues = {
  artboard: null,
  artboardCount: 0,
  artboardIndex: -1,
  loading: false,
  nextArtboard: null,
  notFound: true,
  previousArtboard: null,
} as const;

export function useArtboard({ shareId, artboardId }: { artboardId?: string; shareId?: string }): UseArtboard {
  const { artboards: entries, loading, notFound } = useDocument(shareId);

  if (!artboardId) return emptyValues;

  const artboardIndex = entries.findIndex((artboard) => artboard.shortId === artboardId);

  if (artboardIndex === -1) {
    return {
      artboard: null,
      artboardCount: entries.length,
      artboardIndex: -1,
      loading,
      nextArtboard: null,
      notFound: true,
      previousArtboard: null,
    };
  }

  const artboard = entries[artboardIndex];
  const hasPrevious = artboardIndex > 0;
  const hasNext = artboardIndex < entries.length - 1;

  const previousArtboard = hasPrevious ? entries[artboardIndex - 1] : null;
  const nextArtboard = hasNext ? entries[artboardIndex + 1] : null;

  return {
    artboard,
    artboardCount: entries.length,
    artboardIndex,
    loading,
    nextArtboard,
    notFound,
    previousArtboard,
  };
}

interface MissingArtboard {
  artboard: null;
  artboardCount: number;
  artboardIndex: -1;
  loading: boolean;
  nextArtboard: null;
  notFound: true;
  previousArtboard: null;
}

interface WithArtboard {
  artboard: Artboard;
  artboardCount: number;
  artboardIndex: number;
  loading: boolean;
  nextArtboard: null | Artboard;
  notFound: boolean;
  previousArtboard: null | Artboard;
}

export type UseArtboard = typeof emptyValues | MissingArtboard | WithArtboard;
