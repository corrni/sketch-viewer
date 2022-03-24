/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link, useParams } from 'react-router-dom';

import { Icon } from 'components';
import { useArtboard } from 'hooks';

const styles = css`
  --nav-section-margin: 0 0.2rem;
  --nav-section-width: 3rem;
  --nav-section-color: var(--gray);
  --nav-section-link--disabled: 0.5;
  --nav-section-font-size: 0.85rem;

  display: flex;
  align-items: center;

  .artboardPosition {
    color: var(--nav-section-color);
    font-size: var(--nav-section-font-size);
    width: var(--nav-section-width);
    margin: var(--nav-section-margin);
    text-align: center;
  }

  /* Nav icon disabled state */
  & > .icon.arrow-left,
  & > .icon.arrow-right {
    opacity: var(--nav-section-link--disabled);
  }
`;

export const ArtboardNavSection = () => {
  const params = useParams<{ artboardId: string; shareId: string }>();
  const { artboardCount, artboardIndex, nextArtboard, previousArtboard } = useArtboard({
    artboardId: params.artboardId,
    shareId: params.shareId,
  });

  const artboardPosition = `${artboardIndex + 1} / ${artboardCount}`;

  return (
    <div css={styles}>
      {previousArtboard === null ? (
        <Icon.ArrowLeft />
      ) : (
        <Link to={`/share/${params.shareId}/artboard/${previousArtboard.shortId}`}>
          <Icon.ArrowLeft />
        </Link>
      )}
      <span className="artboardPosition">{artboardPosition}</span>
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
