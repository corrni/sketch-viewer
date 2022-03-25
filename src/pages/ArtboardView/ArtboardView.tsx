/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link, useParams } from 'react-router-dom';

import { Icon } from 'components';
import { useArtboard } from 'hooks';

import { PageLayout } from '../layout';
import { ArtboardNavSection } from './ArtboardNavSection';
import { EmptyPage, FullscreenLoader } from 'pages/EmptyMessage';

const artboardImage = css`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  & > img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
`;

export const ArtboardView = () => {
  const params = useParams<{ artboardId: string; shareId: string }>();
  const { artboard, loading, notFound } = useArtboard({
    artboardId: params.artboardId,
    shareId: params.shareId,
  });

  if (loading) return <FullscreenLoader />;
  if (notFound) return <EmptyPage text="The artboard was not found!" />;

  return (
    <PageLayout.Container>
      <PageLayout.Header
        navIcon={
          <Link to={`/share/${params.shareId}`}>
            <Icon.Close />
          </Link>
        }
        navSection={<ArtboardNavSection />}
        title={artboard?.name}
      />
      <PageLayout.Content>
        <div css={artboardImage}>
          <img src={artboard?.files[1].url} alt={artboard?.name} />
        </div>
      </PageLayout.Content>
    </PageLayout.Container>
  );
};
