import { createRef } from 'react';
import { Button } from '../Button/Button';

import './ConfirmationPopUp.scss';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';

export const ConfirmationPopUp = ({
  name,
  onClickConfirm,
  closePopUp,
}: ConfirmationPopUpProps) => {
  const popUpRef = createRef<HTMLDivElement>();

  useOnClickOutside(popUpRef, () => {
    closePopUp();
  });

  const handleClickConfirm = () => {
    onClickConfirm();
  };
  const handleClickCancel = () => {
    closePopUp();
  };

  return (
    <div ref={popUpRef} className="confirmation__pop-up">
      <h4>Delete {name}</h4>
      <span>The {name} is permanently deleted.</span>
      <span>Cancellation is not possible.</span>
      <div className="confirmation-btns">
        <Button class="btn-red" name="Delete" onClick={handleClickConfirm} />
        <Button name="Cancel" onClick={handleClickCancel} />
      </div>
    </div>
  );
};

interface ConfirmationPopUpProps {
  name: string;
  onClickConfirm: () => void;
  closePopUp: () => void;
}
