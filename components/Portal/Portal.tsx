'use client';

import { Transition } from 'react-transition-group';

import { useRef, MouseEvent, KeyboardEvent } from 'react';
import { createPortal } from 'react-dom';

import { IPortal } from '@/types';

export const Portal = ({ onModalClose, children, showModal }: IPortal) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const focusedDiv = useRef<HTMLDivElement | null>(null);

  const handleBackdrop = (event: MouseEvent) => {
    if (event.target === event.currentTarget) {
      onModalClose();
    }
  };

  const handleEsc = (event: KeyboardEvent) => {
    if (event.code === 'Escape') {
      onModalClose();
    }
  };

  return (
    <Transition
      nodeRef={nodeRef}
      in={showModal}
      timeout={300}
      mountOnEnter
      unmountOnExit
    >
      {state => {
        focusedDiv.current?.focus();
        return createPortal(
          <div
            ref={nodeRef}
            className={` fixed left-0 top-0 z-20 h-[100%] w-[100%] overflow-auto bg-black-dark/75 modal--${state}`}
          >
            <div
              tabIndex={0}
              ref={focusedDiv}
              onKeyDown={handleEsc}
              onClick={handleBackdrop}
              className={` h-full w-full wrapper--${state}`}
            >
              {children}
            </div>
          </div>,
          document.getElementById('modal')!,
        );
      }}
    </Transition>
  );
};
