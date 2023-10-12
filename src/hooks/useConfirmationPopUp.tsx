import { useState } from 'react';
import { ConfirmationPopUp } from '../components/Commons/ConfirmationPopUp/ConfirmationPopUp';

export const useConfirmationPopUp = ({
  name,
  onClickConfirm,
}: UseConfirmationPopUpProps) => {
  const [popUp, setPopUp] = useState<JSX.Element | null>(null);

  const closePopUp = () => {
    setPopUp(null);
  };

  const confirmAction = () => {
    onClickConfirm();
    setPopUp(null);
  };

  const openPopUp = () => {
    setPopUp(
      <ConfirmationPopUp
        onClickConfirm={confirmAction}
        closePopUp={closePopUp}
        name={name}
      />
    );
  };

  return { popUp, openPopUp, closePopUp };
};

interface UseConfirmationPopUpProps {
  name: string;
  onClickConfirm: () => void;
}
