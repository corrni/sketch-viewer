/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

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

export const Container: React.FC = ({ children }) => <div css={styles.wrapper}>{children}</div>;

interface HeaderProps {
  leftNav: React.ReactNode;
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ leftNav }) => {
  return (
    <header css={styles.header}>
      <nav css={styles.headerNav}>{leftNav}</nav>
    </header>
  );
};

export const Content: React.FC = ({ children }) => {
  return <section css={styles.content}>{children}</section>;
};
