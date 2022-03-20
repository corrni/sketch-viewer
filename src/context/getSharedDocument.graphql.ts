import { gql } from 'graphql.macro';

export const GET_SHARED_DOCUMENT = gql`
  query GetSharedDocument($shareId: UUID) {
    share(id: $shareId) {
      identifier
      version {
        document {
          name
          artboards {
            entries {
              name
              shortId
              isArtboard
              files {
                url
                height
                width
                scale
                thumbnails {
                  url
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`;

interface ArtboardThumbnail {
  url: string;
  /** @deprecated */
  height: number | null;
  /** @deprecated */
  width: number | null;
  __typename: 'Thumbnail';
}

interface ArtboardFile {
  url: string;
  height: number;
  width: number;
  scale: number;
  thumbnails: ArtboardThumbnail[];
  __typename: 'File';
}

interface Artboard {
  name: string;
  shortId: string;
  isArtboard: boolean;
  files: ArtboardFile[];
  __typename: 'Artboard';
}

export interface DocumentShare {
  identifier: string;
  version: {
    document: {
      name: string;
      artboards: {
        entries: Artboard[];
        __typename: 'Artboards';
      };
      __typename: 'Document';
    };
    __typename: 'Version';
  };
  __typename: 'Share';
}

export interface DocumentSharePayload {
  share: DocumentShare | null;
}

export interface DocumentShareVariables {
  shareId: string;
}
