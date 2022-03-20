import { useParams } from 'react-router-dom';

export const DocumentView = () => {
  const params = useParams();
  return <div>Sketch document: {params.shareId}</div>;
};
