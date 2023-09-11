'use client';

import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { useEffect } from 'react';

import formBuildingData from '@/data/formBuildingData.json';

import { FormProps, InputT } from '@/types';

import { Input } from '@/components/Input';
import { TextArea } from '@/components/TextArea';
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary';
import { sendDataToTelegram } from '@/utils/helpers/sendDataToTelegram';

export const Form: React.FC<FormProps> = ({ classes }) => {
  const dataString = JSON.stringify(formBuildingData);
  const data = JSON.parse(dataString);
  const { inputs, textarea, button } = data;
  const FORM_DATA_KEY = 'form_session_data';

  const {
    register,
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FieldValues>();

  useFormPersist(FORM_DATA_KEY, { watch, setValue });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  const onSubmit: SubmitHandler<FieldValues> = (formData: FieldValues) => {
    // Here is the handler to create message and send it by Telegram bot to tg channel
    sendDataToTelegram(formData);
    console.log(formData);
  };

  return (
    <form
      className={`flex w-full flex-col gap-[12px] ${classes && classes}`}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      {/* Inputs */}

      <ul className={`flex w-full flex-col gap-[12px]`}>
        {inputs.map((input: InputT) => {
          return (
            <li key={input.id} className="w-full">
              <Input input={input} register={register} errors={errors} />
            </li>
          );
        })}
      </ul>

      {/* Texarea */}

      <TextArea
        textarea={textarea}
        register={register}
        height={106}
        errors={errors}
      />

      {/* Button */}

      <ButtonPrimary
        type="submit"
        className="mx-auto mt-[12px] w-full xl:max-w-[301px] xxl:max-w-[336px]"
      >
        {button.content}
      </ButtonPrimary>
    </form>
  );
};
