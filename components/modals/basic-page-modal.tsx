import React, { ReactNode } from 'react';

interface ModalProps {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ header, footer, children }) => {
  return (
    <main className="flex flex-col justify-center items-center w-screen  max-w-full">
      {header}
      {children}
      {footer}
    </main>
  );
};

export default Modal;
