/** @jsxImportSource @emotion/react */
import React from 'react';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

const reset = css`
  ${emotionReset}

  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`;

const styles = css`
  :root {
    /* Colors */
    --gray: #808080;
    --gray-97: #f7f7f7;
    --platinum: #e6e6e6;
    --white: #fff;

    /* Typography */
    --body-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    --body-font-size: 16px;

    /* Header */
    --header-wrapper-height: 64px;
    --header-border-bottom: 1px solid var(--platinum);
    --header-background-color: var(--white);

    /* Header > Nav section */
    --header-nav-left-margin: 1rem;
    --header-nav-gap: 1rem;
    --header-nav-icon-height: 25px;
    --header-nav-icon-width: 25px;
    --header-nav-separator-height: 3rem;

    /* Header > Title */
    --header-title-font-weight: 600;

    /* Content */
    --main-content-background-color: var(--gray-97);

    /* Document viewer > Artboard thumbnails */
    --artboard-thumbnail-margin: 1.5rem 0.75rem;
    --artboard-thumbnail-gap: 1rem;
    --artboard-thumbnail-font-size: 0.9rem;
    --artboard-thumbnail-color: var(--gray);
    --artboard-thumbnail-font-weight: 500;
    --artboard-thumbnail-width: 250px;
  }

  body {
    font-family: var(--body-font-family);
    font-size: var(--body-font-size);
  }
`;

export const GlobalStyles: React.FC = ({ children }) => (
  <React.Fragment>
    <Global styles={[reset, styles]} />
    {children}
  </React.Fragment>
);
