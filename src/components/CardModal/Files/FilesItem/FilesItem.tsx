import { MouseEvent } from 'react';
import { connect } from 'react-redux';
import { FileType } from '../../../../types';
import { State } from '../../../../redux/store';
import { useConfirmationPopUp } from '../../../../hooks/useConfirmationPopUp';
import { deleteFiles } from '../../../../redux/actions/filesActions';
import { deleteFileFromCard } from '../../../../redux/actions/cardsByIdActions';

import './FilesItem.scss';

export const FilesItem = ({
  file,
  fileId,
  cardId,
  ...props
}: FilesItemProps) => {
  const deleteFile = () => {
    props.deleteFiles([fileId]);
    props.deleteFileFromCard(cardId, fileId);
  };

  const { popUp, openPopUp } = useConfirmationPopUp({
    name: 'file',
    onClickConfirm: deleteFile,
  });

  const handleClickDelete = (e: MouseEvent) => {
    e.stopPropagation();
    openPopUp();
  };

  const handleClickItem = (e: MouseEvent) => {
    console.log('show big image');
  };

  return (
    <li className="files__item-wrapper" onClick={handleClickItem}>
      <div className="files__item">
        <span onClick={handleClickDelete}>Delete</span>
        <img src={file.url} alt="file-item" />
      </div>
      {popUp}
    </li>
  );
};

export default connect(
  ({ files }: State, { fileId }: { fileId: string }) => ({
    file: files[fileId],
  }),
  { deleteFiles, deleteFileFromCard }
)(FilesItem);

interface FilesItemProps {
  fileId: string;
  cardId: string;
  file: FileType;
  deleteFiles: (ids: string[]) => void;
  deleteFileFromCard: (id: string, fileId: string) => void;
}
