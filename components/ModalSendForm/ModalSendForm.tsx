import SvgClose from '@/public/icons/icon_cross.svg';
import { IPortal } from '@/types';

import s from './ModalSendForm.module.css';

const ModalSendForm = ({ setShowModal, children }: IPortal) => {
  return (
    <div className=" max-w-[480px] px-6 mx-auto  md:mx-0 md:w-auto md:px-0   ">
      <div
        className={` ${s.background}  relative mt-[100px] md:mt-auto md:w-auto  md:absolute md:left-[50%] md:top-[50%] md:translate-x-[-50%]   md:translate-y-[-50%]  `}
      >
        <SvgClose
          onClick={() => setShowModal(false)}
          className="absolute right-[15px] top-[21px] h-[57.5px] w-[57.5px] z-20"
        />
        {children}
      </div>
      </div>
   
  );
};

export default ModalSendForm;
