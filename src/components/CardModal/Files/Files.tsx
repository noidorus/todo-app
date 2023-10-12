import { connect } from 'react-redux';
import { State } from '../../../redux/store';
import FilesItem from './FilesItem/FilesItem';

import './Files.scss';

const Files = ({ id, files }: FilesProps) => {
  const elements = files.map((file) => {
    return <FilesItem key={file} cardId={id} fileId={file} />;
  });

  return (
    <div className="files">
      <h3 className="files__title">Files</h3>
      <ul className="files__list">{elements}</ul>
    </div>
  );
};

export default connect(({ cardsById }: State, { id }: { id: string }) => ({
  files: cardsById[id].files,
}))(Files);

interface FilesProps {
  id: string;
  files: string[];
}
