import CloseIcon from '../../assets/images/close-outline.svg';
import './EditButtons.scss';

export const EditButtons = ({ name, close, disabled }: EditButtonsProps) => {
  return (
    <div className="edit-btns">
      <button className="edit-btn" type="submit" disabled={disabled}>
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
  disabled: boolean;
}
