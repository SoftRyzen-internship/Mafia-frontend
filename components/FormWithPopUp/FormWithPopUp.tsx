'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { Form } from '../Form/Form';
import { PopUpType } from '@/types';
import data from '@/data/common.json';

const { onSuccess, onError } = data.onFormSubmitNotify;

export const FormWithPopUp = () => {
  const [popUpType, setPopUpType] = useState<PopUpType>('default');

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

  return <Form setPopUpType={setPopUpType} />;
};
