import { useParams } from 'react-router-dom';

import { Icon } from 'components';
import { useDocument } from 'hooks';

import { EmptyPage, FullscreenLoader } from '../EmptyMessage';
import { PageLayout } from '../layout';
import { ArtboardList } from './ArtboardList';

export const DocumentView = () => {
  const params = useParams<{ shareId: string }>();
  const { loading, notFound, name, artboards } = useDocument(params.shareId);

  if (loading) return <FullscreenLoader />;
  if (notFound) return <EmptyPage text="The document was not found!" />;

  return (
    <PageLayout.Container>
      <PageLayout.Header navIcon={<Icon.SketchLogo />} navSection={<span>{name}</span>} />
      <PageLayout.Content>
        <ArtboardList artboards={artboards} shareId={params.shareId!} />
      </PageLayout.Content>
    </PageLayout.Container>
  );
};
