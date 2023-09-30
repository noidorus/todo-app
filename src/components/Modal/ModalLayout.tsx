import { MouseEvent } from 'react';
import closeIcon from '../../assets/images/close-outline.svg';
import { ModalLayoutProps } from './props';

import './ModalLayout.scss';

export const ModalLayout = ({ children, closeModal }: ModalLayoutProps) => {
  const handleCloseModal = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const currTarget = e.currentTarget as HTMLElement;

    if (target === currTarget) {
      closeModal();
    }
  };

  return (
    <div className="modal" aria-label="modal" onClick={handleCloseModal}>
      <div className="modal-inner">
        <img
          src={closeIcon}
          className="close-icon"
          alt="closeIcon"
          onClick={handleCloseModal}
        />
        {children}
      </div>
      <div className="modal-shadow" />
    </div>
  );
};
