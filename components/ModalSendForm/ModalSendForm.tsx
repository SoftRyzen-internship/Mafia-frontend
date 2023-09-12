import SvgClose from '@/public/icons/icon_cross.svg';
import { IPortal } from '@/types';

import s from './ModalSendForm.module.css';

export const ModalSendForm = ({ setShowModal, children }: IPortal) => {
  return (
    <div className=" mx-auto max-w-[480px] px-6  md:mx-0 md:w-auto md:px-0   ">
      <div
        className={` ${s.background}  relative mt-[100px] md:absolute md:left-[50%]  md:top-[50%] md:mt-auto md:w-auto md:translate-x-[-50%]   md:translate-y-[-50%]  `}
      >
        <SvgClose
          onClick={() => setShowModal(false)}
          className="absolute right-[15px] top-[21px] z-20 h-[57.5px] w-[57.5px]"
        />
        {children}
      </div>
    </div>
  );
};