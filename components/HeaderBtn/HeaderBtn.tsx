'use client';

import { useState } from 'react';

import { ButtonPrimary } from '../Buttons';
import { Portal } from '../Portal';
import { ModalSendForm } from '../ModalSendForm';
import { Form } from '../Form';

import data from '@/data/common.json';

export const HeaderBtn = () => {
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
        <Portal setShowModal={handleToggeModal}>
          <ModalSendForm setShowModal={handleToggeModal}>
            <Form />
          </ModalSendForm>
        </Portal>
      ) : null}
    </>
  );
};
