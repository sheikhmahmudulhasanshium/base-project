import React, { ReactNode } from 'react';

interface ModalProps {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ header, footer, children }) => {
  return (
    <main className="flex flex-1 flex-col justify-between  max-w-full md:w-full sm:w-fit lg:w-full w-full overflow-hidden">
      {header}
      {children}
      {footer}
    </main>
  );
};

export default Modal;