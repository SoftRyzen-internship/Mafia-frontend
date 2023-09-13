'use client';

import { useRef, useEffect, useState, MouseEvent } from 'react';
import { createPortal } from 'react-dom';

import { IPortal } from '@/types';

export const Portal = ({ onModalClose, children }: IPortal) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#modal');
    setMounted(true);
  }, []);

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

  return mounted && ref.current
    ? createPortal(
        <div
          onClick={handleBackdrop}
          className="fixed left-0 top-0 z-20 h-[100%] w-[100%] bg-black-dark opacity-[0.7]"
        >
          {children}
        </div>,
        ref.current,
      )
    : null;
};
