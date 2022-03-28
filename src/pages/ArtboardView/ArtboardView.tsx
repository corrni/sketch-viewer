import { Link, useParams } from 'react-router-dom';

import { Icon } from 'components';
import { useArtboard } from 'hooks';

import { PageLayout } from '../layout';
import { EmptyPage, FullscreenLoader } from '../EmptyMessage';
import { ArtboardNavSection } from './ArtboardNavSection';
import { ArtboardImage } from './ArtboardImage';

const CloseArtboard: React.FC<{ shareId: string }> = ({ shareId }) => (
  <Link to={`/share/${shareId}`}>
    <Icon.Close />
  </Link>
);

export const ArtboardView = () => {
  const params = useParams<{ artboardId: string; shareId: string }>();
  const { artboard, loading, notFound } = useArtboard({
    artboardId: params.artboardId,
    shareId: params.shareId,
  });

  if (loading) return <FullscreenLoader />;
  if (notFound || artboard == null) return <EmptyPage text="The artboard was not found!" />;

  return (
    <PageLayout.Container>
      <PageLayout.Header
        navIcon={<CloseArtboard shareId={params.shareId!} />}
        navSection={<ArtboardNavSection />}
        title={artboard.name}
      />
      <PageLayout.Content>
        <ArtboardImage artboard={artboard} />
      </PageLayout.Content>
    </PageLayout.Container>
  );
};
