/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link, useParams } from 'react-router-dom';

import { Icon } from 'components';
import { useArtboard } from 'hooks';

const styles = css`
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

export const ArtboardNavSection = () => {
  const params = useParams<{ artboardId: string; shareId: string }>();
  const { artboardCount, artboardIndex, nextArtboard, previousArtboard } = useArtboard({
    artboardId: params.artboardId,
    shareId: params.shareId,
  });

  return (
    <div css={styles}>
      {previousArtboard === null ? (
        <Icon.ArrowLeft />
      ) : (
        <Link to={`/share/${params.shareId}/artboard/${previousArtboard.shortId}`}>
          <Icon.ArrowLeft />
        </Link>
      )}
      <span>
        {artboardIndex + 1} / {artboardCount}
      </span>
      {nextArtboard === null ? (
        <Icon.ArrowRight />
      ) : (
        <Link to={`/share/${params.shareId}/artboard/${nextArtboard.shortId}`}>
          <Icon.ArrowRight />
        </Link>
      )}
    </div>
  );
};
