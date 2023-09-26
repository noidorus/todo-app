import './EditButtons.scss';
import CloseIcon from '../../assets/images/close-outline.svg';

export const EditButtons = ({ name, close }: EditButtonsProps) => {
  return (
    <div className="edit-btns">
      <button className="edit-btn" type="submit">
        {name}
      </button>
      <img
        className="edit-btn-close"
        alt="close-icon"
        onClick={close}
        src={CloseIcon}
      />
    </div>
  );
};

interface EditButtonsProps {
  name: string;
  close: () => void;
}
