/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';

import { Loader } from 'components';

import { useDocumentContext } from './DocumentProvider';

export const EnsureSketchDocument = () => {
  const params = useParams();
  const initialLoad = useInitialLoad();
  const { setShareId } = useDocumentContext();

  useEffect(() => {
    if (params.shareId) {
      setShareId(params.shareId);
    }
  }, [params.shareId, setShareId]);

  return initialLoad ? <LoadingIndicator /> : <Outlet />;
};

const LoadingIndicator = () => (
  <div
    css={css`
      display: flex;
      width: 100vw;
      height: 100vh;
      align-items: center;
      justify-content: center;
      background-color: var(--gray-97);
    `}
  >
    <Loader />
  </div>
);

function useInitialLoad() {
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
    }
  }, [initialLoad]);

  return initialLoad;
}
