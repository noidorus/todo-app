import CloseIcon from '../../assets/images/close-outline.svg';
import './EditButtons.scss';

export const EditButtons = ({
  btnDisabled = false,
  ...props
}: EditButtonsProps) => {
  return (
    <div className="edit-btns">
      <button
        className="edit-btn"
        type="button"
        onClick={props.onClickBtn}
        disabled={btnDisabled}
      >
        {props.name}
      </button>
      <img
        className="edit-btn-close"
        alt="close-icon"
        onClick={props.onClickClose}
        src={CloseIcon}
      />
    </div>
  );
};

interface EditButtonsProps {
  name: string;
  btnDisabled?: boolean;
  onClickClose: () => void;
  onClickBtn: () => void;
}
