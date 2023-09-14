'use client';

import { FC, useState } from 'react';

import { ButtonPrimary } from '../Buttons';
import { Portal } from '../Portal';
import { ModalSendForm } from '../ModalSendForm';
import { Form } from '../Form/Form';

import { BtnWithFormModalProps, PopUpType } from '@/types';
import { SuccessWindow } from '../SuccessWindow';
import { ErrorWindow } from '../ErrorWindow';

export const BtnWithFormModal: FC<BtnWithFormModalProps> = ({
  buttonsize,
  text,
  btnClassName,
}) => {
  const [popUpType, setPopUpType] = useState<PopUpType>('default');
  const [showModal, setShowModal] = useState(false);

  const handleToggeModal = () => {
    setShowModal(prev => !prev);
    setPopUpType('default');
  };

  return (
    <>
      <ButtonPrimary
        buttonsize={buttonsize}
        actionHandler={handleToggeModal}
        className={btnClassName}
      >
        {text}
      </ButtonPrimary>

      {showModal ? (
        <Portal onModalClose={handleToggeModal}>
          <ModalSendForm onModalClose={handleToggeModal}>
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
