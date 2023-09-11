import SvgSuccess from '@/public/icons/success.svg';

import { Paragraph } from '@/components/Paragraph';

export const SuccessWindow = () => {
  return (
    <div className=" pb-[96px] pt-[96px]  md:w-[496px] xl:w-[840px] xxl:w-[864px] ">
      <SvgSuccess className="mx-auto mb-3 h-[60px] w-[60px]" />
      <Paragraph variant="large" className="text-center">
        Заявку успішно надіслано!{' '}
      </Paragraph>
      <Paragraph variant="large" className="text-center">
        Наш менеджер
        <span className="block md:inline  "> звʼяжеться з Вами</span>
        <span className="block">найближчим часом!</span>
      </Paragraph>
    </div>
  );
};
