'use client';
import React, { FC, useState } from 'react';

import { ButtonPrimary } from '../Buttons';
import { Portal } from '../Portal';
import { ModalSendForm } from '../ModalSendForm';
import { Form } from '../Form';

import data from '@/data/kidsMafiaMainPage.json';

export const KidsMafiaBtnHolder: FC = () => {
  const [popUpType, setPopUpType] = useState('default');
  const [showModal, setShowModal] = useState(false);
  const onModalClose = () => setShowModal(false);

  return (
    <>
      <ButtonPrimary
        buttonsize="large"
        className="md:mx-auto xl:h-12 xl:w-[301px] xxl:w-[336px]"
        actionHandler={() => setShowModal(prev => !prev)}
      >
        {data.buttonPrimaryText}
      </ButtonPrimary>

      {showModal ? (
        <Portal onModalClose={onModalClose}>
          <ModalSendForm onModalClose={onModalClose}>
            {popUpType === 'default' && <Form setPopUpType={setPopUpType} />}
          </ModalSendForm>
        </Portal>
      ) : null}
    </>
  );
};
