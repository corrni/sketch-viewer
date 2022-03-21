/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useDocumentContext } from 'context';
import { Icon } from 'components';
import { Link } from 'react-router-dom';

const styles = {
  wrapper: css`
    height: 100vh;
    width: 100vw;
    align-items: center;
  `,
  header: css`
    display: flex;
    background-color: var(--white);
    height: 64px;
    width: 100%;
    border-bottom: 1px solid rgb(230, 230, 230);
  `,
  headerNav: css`
    display: flex;
    align-items: center;
    margin-left: 1rem;

    & > * + * {
      margin-left: 0.5rem;
    }

    & > * + svg {
      height: 3rem;
    }
  `,
  content: css`
    background-color: var(--gray-97);
    height: calc(100% - 64px);
    width: 100%;
    overflow-y: auto;
  `,
};

const artboardStyles = {
  wrapper: css`
    margin: 1rem;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    font-size: 0.9rem;
    color: gray;
    font-weight: 500;

    & a {
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

export const DocumentView = () => {
  const { share } = useDocumentContext();

  if (share == null) return <div>Loading...</div>;

  const documentTitle = share.version.document.name;

  const artboardEntries = share.version.document.artboards.entries;

  return (
    <div css={styles.wrapper}>
      <header css={styles.header}>
        <div css={styles.headerNav}>
          <Icon.SketchLogo />
          <Icon.Separator />
          <span>{documentTitle}</span>
        </div>
      </header>
      <section css={styles.content}>
        <div css={artboardStyles.wrapper}>
          {artboardEntries.map((board) => {
            const { name, files } = board;

            const [largeThumbnail, smallThumbnail] = files.flatMap((f) => f.thumbnails);

            return (
              <Link css={artboardStyles.artboardBox} to="#">
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
      </section>
    </div>
  );
};
