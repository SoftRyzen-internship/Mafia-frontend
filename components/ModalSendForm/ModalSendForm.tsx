// import SvgClose from '@/public/icons/icon_cross.svg';
import { IconBtn } from '../IconBtn';

import { IPortal } from '@/types';

import s from './ModalSendForm.module.css';

export const ModalSendForm = ({
  onModalClose,
  children,
  className,
}: IPortal) => {
  return (
    <div className=" mx-auto max-w-[480px] px-6  md:mx-0 md:w-auto md:px-0   ">
      <div
        className={`${s.background} relative  z-40 mt-[100px] bg-[#040404] md:absolute md:left-[50%]  md:top-[50%] md:mt-auto md:w-auto md:translate-x-[-50%]   md:translate-y-[-50%] ${className} `}
      >
        <div className={s.gradient}></div>
        <IconBtn
          icon="cross"
          classes="absolute right-[21px] top-[21px] z-20 h-[57.5px] w-[57.5px]"
          onClick={onModalClose}
        />
        {children}
      </div>
    </div>
  );
};
