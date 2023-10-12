import { MouseEvent } from 'react';
import { connect } from 'react-redux';
import { FileType } from '../../../../types';
import { State } from '../../../../redux/store';

import './FilesItem.scss';
import { useConfirmationPopUp } from '../../../../hooks/useConfirmationPopUp';
import { deleteFile } from '../../../../redux/actions/filesActions';
import { deleteFileFromCard } from '../../../../redux/actions/cardsByIdActions';

export const FilesItem = ({
  file,
  fileId,
  cardId,
  ...props
}: FilesItemProps) => {
  const deleteFile = () => {
    props.deleteFile(fileId);
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
    console.log('event item');
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
  { deleteFile, deleteFileFromCard }
)(FilesItem);

interface FilesItemProps {
  fileId: string;
  cardId: string;
  file: FileType;
  deleteFile: (id: string) => void;
  deleteFileFromCard: (id: string, fileId: string) => void;
}
