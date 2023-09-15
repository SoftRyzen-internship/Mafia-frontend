'use client';

import { useEffect, useState } from 'react';

import { Form } from '../Form/Form';
import { PopUpType } from '@/types';
import { Portal } from '../Portal';
import { ModalSendForm } from '../ModalSendForm';
import { SuccessWindow } from '../SuccessWindow';
import { ErrorWindow } from '../ErrorWindow';

export const FormWithPopUp = () => {
  const [popUpType, setPopUpType] = useState<PopUpType>('default');
  const [showModal, setShowModal] = useState(false);

  const handleToggeModal = () => {
    setShowModal(prev => !prev);
    document.body.classList.toggle('overflow-hidden');
  };

  useEffect(() => {
    const checkPopUpType = (popUpType: PopUpType) => {
      switch (popUpType) {
        case 'success':
          return handleToggeModal();
        case 'error':
          return handleToggeModal();
      }
    };

    checkPopUpType(popUpType);
  }, [popUpType]);

  return (
    <>
      <Form setPopUpType={setPopUpType} />
      {showModal ? (
        <Portal onModalClose={handleToggeModal}>
          <ModalSendForm onModalClose={handleToggeModal}>
            {popUpType === 'success' ? <SuccessWindow /> : null}
            {popUpType === 'error' ? <ErrorWindow /> : null}
          </ModalSendForm>
        </Portal>
      ) : null}
    </>
  );
};
