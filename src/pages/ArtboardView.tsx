/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useDocumentContext } from 'context';
import { Icon } from 'components';
import { Link, useParams } from 'react-router-dom';
import { PageLayout } from './layout';
import React from 'react';

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

const navigationStyles = css`
  display: flex;
  align-items: center;

  & > span {
    color: var(--gray);
    font-size: 0.85rem;
    width: 3rem;
    margin: 0 0.2rem;
    text-align: center;
  }
`;

const PreviousLink: React.FC<{ to: string; disabled: boolean }> = ({ to, disabled }) =>
  disabled ? (
    <Icon.ArrowLeft />
  ) : (
    <Link to={to}>
      <Icon.ArrowLeft />
    </Link>
  );

const NextLink: React.FC<{ to: string; disabled: boolean }> = ({ to, disabled }) =>
  disabled ? (
    <Icon.ArrowRight />
  ) : (
    <Link to={to}>
      <Icon.ArrowRight />
    </Link>
  );

export const ArtboardView = () => {
  const params = useParams();
  const { share } = useDocumentContext();

  if (share == null) return <div>Loading...</div>;

  const entries = share.version.document.artboards.entries;
  const artboard = entries.find((artboard) => artboard.shortId === params.artboardId);

  const artboardIndex = (currentId: string) => entries.findIndex((artboard) => artboard.shortId === currentId);

  const previousArtboardId = (currentId: string) => {
    const artboardIdx = entries.findIndex((artboard) => artboard.shortId === currentId);
    const hasPrevious = artboardIdx > 0;
    return hasPrevious ? entries[artboardIdx - 1]?.shortId : null;
  };

  const nextArtboardId = (currentId: string) => {
    const artboardIdx = entries.findIndex((artboard) => artboard.shortId === currentId);
    const hasNext = artboardIdx !== -1 && artboardIdx < entries.length - 1;
    return hasNext ? entries[artboardIdx + 1].shortId : null;
  };

  return (
    <PageLayout.Container>
      <PageLayout.Header
        navIcon={
          <Link to={`/share/${params.shareId}`}>
            <Icon.Close />
          </Link>
        }
        navSection={
          <div css={navigationStyles}>
            <PreviousLink
              disabled={previousArtboardId(params?.artboardId!) === null}
              to={`/share/${params?.shareId}/artboard/${previousArtboardId(params?.artboardId!)}`}
            />
            <span>
              {artboardIndex(params?.artboardId!) + 1} / {entries.length}
            </span>
            <NextLink
              disabled={nextArtboardId(params?.artboardId!) === null}
              to={`/share/${params?.shareId}/artboard/${nextArtboardId(params?.artboardId!)}`}
            />
          </div>
        }
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
