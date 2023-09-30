export interface ModalContextProps {
  Modal: JSX.Element | null;
  setModal: (children: JSX.Element) => void;
  closeModal: () => void;
}

export interface ModalProviderProps {
  children: JSX.Element;
}

export interface ModalLayoutProps {
  children: JSX.Element;
  closeModal: () => void;
}
