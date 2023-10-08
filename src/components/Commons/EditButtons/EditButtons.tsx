import CloseIcon from '../../../assets/images/close-outline.svg';
import { Button } from '../Button/Button';
import './EditButtons.scss';

export const EditButtons = ({
  btnDisabled = false,
  ...props
}: EditButtonsProps) => {
  return (
    <div className="edit-btns">
      <Button
        class="btn-green"
        name={props.name}
        disabled={btnDisabled}
        onClick={props.onClickBtn}
      />

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
