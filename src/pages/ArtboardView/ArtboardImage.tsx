/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Artboard } from 'hooks';

export const ArtboardImage: React.FC<{ artboard: Artboard }> = ({ artboard }) => {
  const { srcImage, srcSet } = getImageAttributes(artboard);

  const artboardImage = css`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    & img {
      max-width: 100%;
      max-height: 100%;
    }
  `;

  return (
    <div css={artboardImage}>
      <img src={srcImage.url} alt={artboard.name} srcSet={srcSet} />
    </div>
  );
};

function getImageAttributes(artboard: Artboard) {
  const artboardImages = artboard.files.map(({ url, height, scale, width }) => ({
    url,
    height,
    width,
    scale,
  }));

  // NOTE: Making a number of assumptions here (e.g. at least one image will have a scale of 1),
  // user-facing code would ofc need to be more robust than this.
  const srcImage = artboardImages.find((image) => image.scale === 1) ?? artboardImages[0];
  const srcSet = artboardImages.reduce((acc, current) => {
    if (!current) return acc;
    const isStart = acc.length === 0;
    return isStart ? `${current.url} ${current.width}w` : [acc, `${current.url} ${current.width}w`].join(', ');
  }, '');

  return {
    srcImage,
    srcSet,
  };
}
