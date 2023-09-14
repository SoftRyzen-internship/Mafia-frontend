import { IconBtn } from '../IconBtn';

import { IPortal } from '@/types';

import s from './ModalSendForm.module.css';

export const ModalSendForm = ({
  onModalClose,
  children,
  className,
}: IPortal) => {
  return (
    <div
      className={`${s.background} relative z-40 m-[20px] flex items-center justify-center 
      rounded-normal bg-body px-[20px] py-[96px] shadow-modalSentForm
      sm:mx-auto sm:w-[440px] md:w-[496px] xl:absolute xl:left-1/2
      xl:top-1/2 xl:w-[840px] xl:-translate-x-1/2 xl:-translate-y-1/2 xxl:w-[864px] 
      smOnly:mt-[40px] mdOnly:mt-[60px] ${className}`}
    >
      <IconBtn
        icon="cross"
        classes="absolute right-[21px] top-[21px] z-20 h-[57.5px] w-[57.5px]"
        onClick={onModalClose}
      />
      {children}
    </div>
  );
};
