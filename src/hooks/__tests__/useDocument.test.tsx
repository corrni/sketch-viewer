import { MockedProvider } from '@apollo/client/testing';
import { renderHook } from '@testing-library/react-hooks';

import { useDocument } from '../useDocument';
import { missingDocument, withDocument } from './document.mock';

describe('useDocument', () => {
  describe('when the document is found', () => {
    const wrapper = ({ children }: { children?: any }) => (
      <MockedProvider addTypename mocks={withDocument}>
        {children}
      </MockedProvider>
    );

    it('returns the document', async () => {
      const { result, waitFor } = renderHook(() => useDocument('e981971c-ff57-46dc-a932-a60dc1804992'), { wrapper });

      await waitFor(() => {
        expect(result.current).toMatchObject({
          loading: false,
          name: 'Code test',
          notFound: false,
        });
      });
      expect(result.current.artboards).toHaveLength(5);
    });
  });

  describe('when the document does not exist', () => {
    const wrapper = ({ children }: { children?: any }) => (
      <MockedProvider addTypename mocks={missingDocument}>
        {children}
      </MockedProvider>
    );

    it('indicates that the document is missing', async () => {
      const { result, waitFor } = renderHook(() => useDocument('missing-document'), { wrapper });

      await waitFor(() => {
        expect(result.current.notFound).toBe(true);
      });
    });
  });
});
