import { MouseEvent } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import closeIcon from '../../assets/images/close-outline.svg';

import './ModalLayout.scss';

export const ModalLayout = () => {
  const navigate = useNavigate();

  const handleCloseModal = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const currTarget = e.currentTarget as HTMLElement;

    if (target === currTarget) {
      navigate(-1);
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
        <Outlet />
      </div>
      <div className="modal-shadow" />
    </div>
  );
};
