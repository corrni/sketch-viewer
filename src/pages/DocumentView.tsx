/** @jsxImportSource @emotion/react */
import { useMemo } from 'react';
import { css } from '@emotion/react';
import { Link, useParams } from 'react-router-dom';

import { useDocumentContext } from 'context';
import { Icon } from 'components';

import { PageLayout } from './layout';

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

export const DocumentView = () => {
  const params = useParams();
  const document = useSketchDocument();

  if (document == null) return <div>Loading...</div>;

  return (
    <PageLayout.Container>
      <PageLayout.Header navIcon={<Icon.SketchLogo />} navSection={<span>{document.title}</span>} />
      <PageLayout.Content>
        <div css={styles.wrapper}>
          {document.artboards.map(({ name, shortId, smallThumbnail, largeThumbnail }) => {
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

function useSketchDocument() {
  const { share } = useDocumentContext();

  return useMemo(() => {
    if (share == null) return null;
    const artboardEntries = share.version.document.artboards.entries;

    return {
      title: share.version.document.name,
      artboards: artboardEntries.map(({ files, name, shortId }) => {
        const [largeThumbnail, smallThumbnail] = files.flatMap((f) => f.thumbnails);

        return {
          largeThumbnail,
          smallThumbnail,
          name,
          shortId,
        };
      }),
    };
  }, [share]);
}
