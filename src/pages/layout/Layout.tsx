/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Icon } from 'components';

interface HeaderProps {
  navIcon?: React.ReactNode;
  navSection?: React.ReactNode;
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ navIcon, navSection, title }) => {
  const styles = {
    wrapper: css`
      display: flex;
      position: relative;
      align-items: center;
      justify-content: flex-start;
      height: var(--header-wrapper-height);
      width: 100%;
      background-color: var(--header-background-color);
      border-bottom: var(--header-border-bottom);
    `,
    navSection: css`
      display: flex;
      align-items: center;
      margin-left: var(--header-nav-left-margin);
      gap: var(--header-nav-gap);

      .icon.separator {
        height: var(--header-nav-separator-height);
      }
    `,
    navIcon: css`
      display: flex;
      align-items: center;
      justify-content: center;
      height: var(--header-nav-icon-height);
      width: var(--header-nav-icon-width);
    `,
    headerTitle: css`
      display: flex;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      h1 {
        font-weight: var(--header-title-font-weight);
      }
    `,
  };

  return (
    <header css={styles.wrapper}>
      <nav css={styles.navSection}>
        <div css={styles.navIcon}>{navIcon}</div>
        <Icon.Separator />
        {navSection}
      </nav>
      {title && (
        <div css={styles.headerTitle}>
          <h1>{title}</h1>
        </div>
      )}
    </header>
  );
};

export const Container: React.FC = ({ children }) => {
  const styles = css`
    height: 100vh;
    width: 100vw;
    align-items: center;
  `;

  return <div css={styles}>{children}</div>;
};

export const Content: React.FC = ({ children }) => {
  const styles = css`
    background-color: var(--main-content-background-color);
    height: calc(100% - var(--header-wrapper-height));
    width: 100%;
    overflow-y: auto;
  `;

  return <section css={styles}>{children}</section>;
};
