'use client';

import { useRef, useEffect, useState, MouseEvent  } from 'react';
import { createPortal } from 'react-dom';

import { IPortal } from '@/types';

// eslint-disable-next-line no-unused-vars
type IClickHandler = (e: MouseEvent) => void;

const Portal = ({ setShowModal, children }: IPortal) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#modal');
    setMounted(true);
  }, []);

  useEffect(() => {
    const onClickEscape = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        setShowModal(false);
      }
    };
    document.addEventListener('keydown', onClickEscape);
    return () => {
      document.removeEventListener('keydown', onClickEscape);
    };
  }, [setShowModal]);

  const handleBackdrop: IClickHandler = event => {
    if (event.target === event.currentTarget) {
      setShowModal(false);
    }
  };

  return mounted && ref.current
    ? createPortal(
        <div onClick={handleBackdrop} className="fixed left-0 top-0 z-20 h-[100%] w-[100%] opacity-75">
          {children}
        </div>,
        ref.current,
      )
    : null;
};

export default Portal;

