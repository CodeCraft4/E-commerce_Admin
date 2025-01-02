import React from "react";

type ModalState = boolean;

type UseModalProps = {
  Open: ModalState;
  onOpen: () => void;
  onClose: () => void;
};

export const useModal = (initialState: ModalState = false): UseModalProps => {
  const [Open, setOpen] = React.useState<ModalState>(initialState);

  const onOpen = React.useCallback(() => {
    setOpen(true);
  }, []);

  const onClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  return {
    Open,
    onOpen,
    onClose,
  };
};
