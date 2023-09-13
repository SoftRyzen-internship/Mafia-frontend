'use client';

import { useState } from 'react';

import { ButtonPrimary } from '../Buttons';
import { Portal } from '../Portal';
import { ModalSendForm } from '../ModalSendForm';
import { Form } from '../Form';

import data from '@/data/common.json';

export const HeaderBtn = () => {
  const [popUpType, setPopUpType] = useState('default');
  const [showModal, setShowModal] = useState(false);

  const { button } = data.header;

  const handleToggeModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <ButtonPrimary buttonsize="small" actionHandler={handleToggeModal}>
        {button}
      </ButtonPrimary>

      {showModal ? (
        <Portal onModalClose={handleToggeModal}>
          <ModalSendForm onModalClose={handleToggeModal}>
            {popUpType === 'default' ? (
              <Form setPopUpType={setPopUpType} />
            ) : null}
          </ModalSendForm>
        </Portal>
      ) : null}
    </>
  );
};
