/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Artboard } from 'hooks';
import { ArtboardThumbnail } from './ArtboardThumbnail';

const styles = css`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(var(--artboard-thumbnail-width), 1fr));
  margin: 1rem;
`;

export const ArtboardList: React.VFC<{ artboards: Artboard[]; shareId: string }> = ({ artboards, shareId }) => {
  const artboardEntries = formatArtboardEntries(artboards);

  return (
    <div css={styles}>
      {artboardEntries.map(({ name, shortId, smallThumbnail, largeThumbnail }) => (
        <ArtboardThumbnail
          key={shortId}
          artboardId={shortId}
          artboardName={name}
          smallUrl={smallThumbnail.url}
          largeUrl={largeThumbnail.url}
          shareId={shareId}
        />
      ))}
    </div>
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
