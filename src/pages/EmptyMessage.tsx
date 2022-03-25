/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Loader } from 'components';
import { PageLayout } from './layout';

const EmptyMessage: React.FC = ({ children }) => {
  const styles = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 100%;

    h2 {
      font-size: 2rem;
      font-weight: 600;
    }
  `;

  return (
    <PageLayout.Container>
      <PageLayout.Header />
      <PageLayout.Content>
        <div css={styles}>{children}</div>
      </PageLayout.Content>
    </PageLayout.Container>
  );
};

export const FullscreenLoader = () => (
  <EmptyMessage>
    <Loader />
  </EmptyMessage>
);

export const EmptyPage: React.FC<{ text: string }> = ({ text }) => (
  <EmptyMessage>
    <h2>{text}</h2>
  </EmptyMessage>
);
