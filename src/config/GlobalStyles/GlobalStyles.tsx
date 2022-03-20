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

const colors = css`
  :root {
    --white: #fff;
    --gray-97: #f7f7f7;
  }
`;

const typography = css`
  :root {
    --body-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    --body-font-size: 16px;
  }

  body {
    font-family: var(--body-font-family);
    font-size: var(--body-font-size);
  }
`;

export const GlobalStyles: React.FC = ({ children }) => (
  <React.Fragment>
    <Global styles={reset} />
    <Global styles={[colors, typography]} />
    {children}
  </React.Fragment>
);
