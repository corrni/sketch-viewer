/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link, useParams } from 'react-router-dom';

import { Icon } from 'components';
import { Artboard, useDocument } from 'hooks';

import { PageLayout } from './layout';
import { useMemo } from 'react';

const styles = {
  wrapper: css`
    margin: 1rem;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    font-size: 0.9rem;
    color: gray;
    font-weight: 500;

    a {
      color: inherit;
      text-decoration: none;
    }
  `,
  artBoard: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin: 1.5rem 0.75rem;
    gap: 1rem;

    & > img {
      width: 250px;
      margin: auto;
    }
  `,
};

const formatArtboardEntries = (artboards: Artboard[]) =>
  artboards.map(({ files, name, shortId }) => {
    const [largeThumbnail, smallThumbnail] = files.flatMap((f) => f.thumbnails);

    return {
      largeThumbnail,
      smallThumbnail,
      name,
      shortId,
    };
  });

export const DocumentView = () => {
  const params = useParams<{ shareId: string }>();
  const sharedDocument = useDocument(params.shareId);
  const artboardEntries = useMemo(() => formatArtboardEntries(sharedDocument.artboards), [sharedDocument.artboards]);

  if (sharedDocument.loading) return <div>Loading...</div>;
  if (sharedDocument.notFound) return <div>Not found</div>;

  return (
    <PageLayout.Container>
      <PageLayout.Header navIcon={<Icon.SketchLogo />} navSection={<span>{sharedDocument.name}</span>} />
      <PageLayout.Content>
        <div css={styles.wrapper}>
          {artboardEntries.map(({ name, shortId, smallThumbnail, largeThumbnail }) => {
            return (
              <Link key={shortId} css={styles.artBoard} to={`/share/${params.shareId}/artboard/${shortId}`}>
                <img
                  alt={name}
                  src={smallThumbnail.url}
                  srcSet={`${smallThumbnail.url} 1x, ${largeThumbnail.url} 2x`}
                />
                <span>{name}</span>
              </Link>
            );
          })}
        </div>
      </PageLayout.Content>
    </PageLayout.Container>
  );
};
