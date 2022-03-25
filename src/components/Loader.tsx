/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const styles = css`
  --loader-wrapper-size: 32px;
  --loader-border-size: 4px;

  & {
    border: var(--loader-border-size) solid #f3f3f3;
    border-top: var(--loader-border-size) solid #555;
    border-radius: 50%;
    width: var(--loader-wrapper-size);
    height: var(--loader-wrapper-size);
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Loader = () => <div css={styles}></div>;
