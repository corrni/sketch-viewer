import { MockedProvider } from '@apollo/client/testing';
import { renderHook } from '@testing-library/react-hooks';

import { useArtboard } from '../useArtboard';
import { withDocument } from './document.mock';

const wrapper = ({ children }: { children?: any }) => (
  <MockedProvider addTypename mocks={withDocument}>
    {children}
  </MockedProvider>
);

describe('useArtboard', () => {
  describe('when no `artboardId` is provided', () => {
    it('returns empty values', async () => {
      const emptyValues = {
        artboard: null,
        artboardCount: 0,
        artboardIndex: -1,
        loading: false,
        nextArtboard: null,
        notFound: true,
        previousArtboard: null,
      };

      const { result, waitFor } = renderHook(() => useArtboard({ shareId: 'e981971c-ff57-46dc-a932-a60dc1804992' }), {
        wrapper,
      });

      await waitFor(() => {
        expect(result.current).toMatchObject(emptyValues);
      });
    });
  });

  describe('when the artboard does not exist in the document', () => {
    it('indicates that the artboard was not found', async () => {
      const { result, waitFor } = renderHook(
        () => useArtboard({ shareId: 'e981971c-ff57-46dc-a932-a60dc1804992', artboardId: 'missing-artboard' }),
        { wrapper }
      );

      await waitFor(() => {
        expect(result.current.notFound).toBe(true);
      });
    });
  });

  describe('when the artboard exists in the document', () => {
    it('returns the correct artboard', async () => {
      const { result, waitFor } = renderHook(
        () => useArtboard({ shareId: 'e981971c-ff57-46dc-a932-a60dc1804992', artboardId: 'qQQ1Z72' }),
        {
          wrapper,
        }
      );

      await waitFor(() => {
        expect(result.current.artboard).toMatchObject({
          name: 'Xerox alto',
          shortId: 'qQQ1Z72',
        });
      });
    });

    describe('when asking for the previous artboard', () => {
      it('returns `null` for the first artboard in the list', async () => {
        const { result, waitFor } = renderHook(
          () => useArtboard({ shareId: 'e981971c-ff57-46dc-a932-a60dc1804992', artboardId: 'qQQ1Z72' }),
          {
            wrapper,
          }
        );

        await waitFor(() => {
          expect(result.current.previousArtboard).toBe(null);
        });
      });

      it('returns the previous artboard otherwise', async () => {
        const { result, waitFor } = renderHook(
          () => useArtboard({ shareId: 'e981971c-ff57-46dc-a932-a60dc1804992', artboardId: 'Lbbm3M3' }),
          {
            wrapper,
          }
        );

        await waitFor(() => {
          expect(result.current.previousArtboard).toMatchObject({
            name: 'Xerox alto',
            shortId: 'qQQ1Z72',
          });
        });
      });
    });

    describe('when asking for the next artboard', () => {
      it('returns `null` for the last artboard in the list', async () => {
        const { result, waitFor } = renderHook(
          () => useArtboard({ shareId: 'e981971c-ff57-46dc-a932-a60dc1804992', artboardId: '95513Kz' }),
          {
            wrapper,
          }
        );

        await waitFor(() => {
          expect(result.current.nextArtboard).toBe(null);
        });
      });

      it('returns the next artboard otherwise', async () => {
        const { result, waitFor } = renderHook(
          () => useArtboard({ shareId: 'e981971c-ff57-46dc-a932-a60dc1804992', artboardId: '7VVo3EP' }),
          {
            wrapper,
          }
        );

        await waitFor(() => {
          expect(result.current.nextArtboard).toMatchObject({
            name: 'Android 4',
            shortId: 'yLLED0a',
          });
        });
      });
    });

    it("returns the artboard's index in the list", async () => {
      const { result, waitFor } = renderHook(
        () => useArtboard({ shareId: 'e981971c-ff57-46dc-a932-a60dc1804992', artboardId: 'yLLED0a' }),
        {
          wrapper,
        }
      );

      await waitFor(() => {
        expect(result.current.artboardIndex).toBe(3);
      });
    });
  });
});
