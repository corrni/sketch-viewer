/** @jsxImportSource @emotion/react */
import React from 'react';
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
  artboardBox: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 1.5rem 0.75rem;

    & > * + * {
      margin-top: 1rem;
    }

    & > img {
      width: 250px;
    }
  `,
};

const NavSection: React.FC<{ title: string }> = ({ title }) => (
  <React.Fragment>
    <Icon.SketchLogo />
    <Icon.Separator />
    <span>{title}</span>
  </React.Fragment>
);

export const DocumentView = () => {
  const params = useParams();
  const { share } = useDocumentContext();

  if (share == null) return <div>Loading...</div>;

  const documentTitle = share.version.document.name;
  const artboardEntries = share.version.document.artboards.entries;

  return (
    <PageLayout.Container>
      <PageLayout.Header leftNav={<NavSection title={documentTitle} />} />
      <PageLayout.Content>
        <div css={styles.wrapper}>
          {artboardEntries.map((board) => {
            const { name, files, shortId } = board;
            const [largeThumbnail, smallThumbnail] = files.flatMap((f) => f.thumbnails);

            return (
              <Link key={shortId} css={styles.artboardBox} to={`/share/${params.shareId}/artboard/${shortId}`}>
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
