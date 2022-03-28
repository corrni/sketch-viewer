/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

interface Props {
  artboardId: string;
  shareId: string;
  artboardName: string;
  smallUrl: string;
  largeUrl: string;
}

export const ArtboardThumbnail: React.FC<Props> = ({ artboardId, artboardName, largeUrl, smallUrl, shareId }) => {
  const styles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin: var(--artboard-thumbnail-margin);
    gap: var(--artboard-thumbnail-gap);

    font-size: var(--artboard-thumbnail-font-size);
    color: var(--artboard-thumbnail-color);
    font-weight: var(--artboard-thumbnail-font-weight);
    text-decoration: none;

    & > img {
      width: var(--artboard-thumbnail-width);
      margin: auto;
    }
  `;

  return (
    <Link key={artboardId} css={styles} to={`/share/${shareId}/artboard/${artboardId}`}>
      <img alt={artboardName} src={smallUrl} srcSet={`${smallUrl} 1x, ${largeUrl} 2x`} />
      <span>{artboardName}</span>
    </Link>
  );
};
