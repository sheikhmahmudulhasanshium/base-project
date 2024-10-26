import React, { ReactNode } from 'react';

interface ModalProps {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({  header, footer, children }) => {
  return (
    <main className="flex flex-col justify-between items-center w-full min-h-screen overflow-y-scroll">
          {header}
          {children}
          {footer}
      
    </main>
  );
};

export default Modal;