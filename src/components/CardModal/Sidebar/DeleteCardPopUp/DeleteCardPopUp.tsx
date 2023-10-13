import { useNavigate } from 'react-router-dom';
import { ConfirmationPopUp } from '../../../Commons/ConfirmationPopUp/ConfirmationPopUp';
import { connect } from 'react-redux';
import { State } from '../../../../redux/store';
import { deleteCard } from '../../../../redux/actions/cardsByIdActions';
import { deleteComments } from '../../../../redux/actions/commentsActions';
import { deleteFiles } from '../../../../redux/actions/filesActions';
import { deleteCardFromList } from '../../../../redux/actions/listByIdActions';

const DeleteCardPopUp = ({
  closePopUp,
  commentsIds,
  filesIds,
  listId,
  ...props
}: DeleteCardPopUpProps) => {
  const navigate = useNavigate();

  const onCLickClose = () => {
    if (closePopUp) closePopUp();
  };

  const deleteCard = () => {
    if (listId) {
      setTimeout(() => {
        props.deleteComments(commentsIds);
        props.deleteCard(props.id);
        props.deleteCardFromList(props.id, listId);
        props.deleteFiles(filesIds);
      }, 10);
      navigate(-1);
    }
  };

  return (
    <ConfirmationPopUp
      name="card"
      onClickConfirm={deleteCard}
      closePopUp={onCLickClose}
    />
  );
};

export default connect(
  ({ cardsById }: State, { id }: { id: string }) => ({
    commentsIds: cardsById[id].comments,
    filesIds: cardsById[id].files,
  }),
  { deleteCard, deleteCardFromList, deleteComments, deleteFiles }
)(DeleteCardPopUp);

interface DeleteCardPopUpProps {
  id: string;
  commentsIds: string[];
  filesIds: string[];
  listId: string;
  deleteCard: (id: string) => void;
  deleteCardFromList: (cardId: string, listId: string) => void;
  deleteComments: (commentsIds: string[]) => void;
  deleteFiles: (ids: string[]) => void;
  closePopUp?: () => void;
}
