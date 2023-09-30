import React, { createContext, useContext, useState } from 'react';
import { ModalLayout } from './ModalLayout';
import { ModalContextProps, ModalProviderProps } from './props';

const ModalContext = createContext<ModalContextProps>({
  Modal: null,
  setModal: () => {},
  closeModal: () => {},
});

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [Modal, setActiveModal] = useState<JSX.Element | null>(null);

  const closeModal = () => {
    setActiveModal(null);
  };

  const setModal = (children: JSX.Element) => {
    setActiveModal(
      <ModalLayout closeModal={closeModal}>{children}</ModalLayout>
    );
  };

  return (
    <ModalContext.Provider value={{ Modal, closeModal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);

export { ModalProvider, useModal };
