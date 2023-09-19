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
    setPopUpType('default');
  };

  useEffect(() => {
    if (popUpType !== 'default') {
      setShowModal(prev => !prev);
      document.body.classList.toggle('overflow-hidden');
    }
  }, [popUpType]);

  return (
    <>
      <Form setPopUpType={setPopUpType} />

      <Portal onModalClose={handleToggeModal} showModal={showModal}>
        <ModalSendForm onModalClose={handleToggeModal}>
          {popUpType === 'success' ? <SuccessWindow /> : null}
          {popUpType === 'error' ? <ErrorWindow /> : null}
        </ModalSendForm>
      </Portal>
    </>
  );
};
