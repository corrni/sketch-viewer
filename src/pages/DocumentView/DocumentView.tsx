/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';

import { Icon } from 'components';
import { Artboard, useDocument } from 'hooks';

import { PageLayout } from '../layout';
import { ArtboardThumbnail } from './ArtboardThumbnail';

const styles = css`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(var(--artboard-thumbnail-width), 1fr));
  margin: 1rem;
`;

export const DocumentView = () => {
  const params = useParams<{ shareId: string }>();
  const sharedDocument = useDocument(params.shareId);
  const artboardEntries = formatArtboardEntries(sharedDocument.artboards);

  if (sharedDocument.loading) return <div>Loading...</div>;

  if (sharedDocument.notFound) return <div>Not found</div>;

  return (
    <PageLayout.Container>
      <PageLayout.Header navIcon={<Icon.SketchLogo />} navSection={<span>{sharedDocument.name}</span>} />
      <PageLayout.Content>
        <div css={styles}>
          {artboardEntries.map(({ name, shortId, smallThumbnail, largeThumbnail }) => (
            <ArtboardThumbnail
              artboardId={shortId}
              artboardName={name}
              smallUrl={smallThumbnail.url}
              largeUrl={largeThumbnail.url}
              shareId={params.shareId!}
            />
          ))}
        </div>
      </PageLayout.Content>
    </PageLayout.Container>
  );
};

function formatArtboardEntries(artboards: Artboard[]) {
  return artboards.map(({ files, name, shortId }) => {
    const [largeThumbnail, smallThumbnail] = files.flatMap((f) => f.thumbnails);

    return {
      largeThumbnail,
      smallThumbnail,
      name,
      shortId,
    };
  });
}
