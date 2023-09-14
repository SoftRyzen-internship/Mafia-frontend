'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { ButtonPrimary } from '../Buttons';
import { Portal } from '../Portal';
import { ModalSendForm } from '../ModalSendForm';
import { Form } from '../Form/Form';

import { BtnWithFormModalProps, PopUpType } from '@/types';
import data from '@/data/common.json';
import { SuccessWindow } from '../SuccessWindow';
import { ErrorWindow } from '../ErrorWindow';

const { onSuccess, onError } = data.onFormSubmitNotify;

export const BtnWithFormModal: React.FC<BtnWithFormModalProps> = ({
  buttonsize,
  text,
}) => {
  const [popUpType, setPopUpType] = useState<PopUpType>('default');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const checkPopUpType = (popUpType: PopUpType) => {
      switch (popUpType) {
        case 'default':
          return;
        case 'success':
          return toast.success(onSuccess);
        case 'error':
          return toast.error(onError);
      }
    };

    checkPopUpType(popUpType);
  }, [popUpType]);

  const handleToggeModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <ButtonPrimary buttonsize={buttonsize} actionHandler={handleToggeModal}>
        {text}
      </ButtonPrimary>

      {showModal ? (
        <Portal setShowModal={handleToggeModal}>
          <ModalSendForm setShowModal={handleToggeModal}>
            {popUpType === 'default' ? (
              <Form setPopUpType={setPopUpType} />
            ) : null}
            {popUpType === 'success' ? <SuccessWindow /> : null}
            {popUpType === 'error' ? <ErrorWindow /> : null}
          </ModalSendForm>
        </Portal>
      ) : null}
    </>
  );
};
