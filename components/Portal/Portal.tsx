'use client';

import { Transition } from 'react-transition-group';

import { useRef, useEffect, MouseEvent } from 'react';
import { createPortal } from 'react-dom';

import { IPortal } from '@/types';

export const Portal = ({ onModalClose, children, showModal }: IPortal) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClickEscape = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onModalClose();
      }
    };
    document.addEventListener('keydown', onClickEscape);
    return () => {
      document.removeEventListener('keydown', onClickEscape);
    };
  }, [onModalClose]);

  const handleBackdrop = (event: MouseEvent) => {
    if (event.target === event.currentTarget) {
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
      {state =>
        createPortal(
          <div
            ref={nodeRef}
            onClick={handleBackdrop}
            className={` fixed left-0 top-0 z-20 h-[100%] w-[100%] overflow-auto bg-black-dark/75 alert--${state}`}
          >
            {children}
          </div>,
          document.getElementById('modal'),
        )
      }
    </Transition>
  );
};
