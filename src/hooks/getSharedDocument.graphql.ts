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
