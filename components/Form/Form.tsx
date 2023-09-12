'use client';

import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { useEffect, useState } from 'react';

import formBuildingData from '@/data/formBuildingData.json';
import { sendDataToTelegram } from '@/utils/helpers/sendDataToTelegram';

import { FormProps, InputT, FormData } from '@/types';

import { Input } from '@/components/Input';
import { TextArea } from '@/components/TextArea';
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary';
import { Loader } from '@/components/Loader';

export const Form: React.FC<FormProps> = ({
  classes,
  center,
  setPopUpType,
}) => {
  const dataString = JSON.stringify(formBuildingData);
  const data = JSON.parse(dataString);
  const { heading, inputs, textarea, button } = data;
  const FORM_DATA_KEY = 'form_session_data';

  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  const onSubmit: SubmitHandler<FieldValues> = async (formData: FormData) => {
    function resolveForm(isSuccess: boolean): void {
      setIsLoading(false);
      const popUpType = isSuccess ? 'success' : 'error';
      reset();
      sessionStorage.removeItem(FORM_DATA_KEY);
      setPopUpType(popUpType);
    }

    try {
      setIsLoading(true);
      const isSuccess: boolean = await sendDataToTelegram(formData);
      resolveForm(isSuccess);
    } catch (error) {
      resolveForm(false);
    }
  };

  return (
    <div className={`min-h-[390px] ${classes && classes}`}>
      {isLoading && (
        <Loader
          size={40}
          color="#8D0B93"
          className="h-full min-h-[390px] w-full"
        />
      )}

      {!isLoading && (
        <>
          <h2
            className={`${
              center && 'text-center'
            } text-[20px] font-medium leading-[1.4] xl:text-[24px] xl:leading-[1.33]`}
          >
            {heading}
          </h2>

          <form
            className={`mt-[16px] flex w-full flex-col gap-[20px]`}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            {/* Inputs */}
            <ul className={`flex w-full flex-col gap-[20px]`}>
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
        </>
      )}
    </div>
  );
};
