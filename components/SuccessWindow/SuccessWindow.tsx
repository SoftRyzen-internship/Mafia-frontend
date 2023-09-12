import SvgSuccess from '@/public/icons/success.svg';

import { Paragraph } from '@/components/Paragraph';

import data from '@/data/success.json';

export const SuccessWindow = () => {
  return (
    <div className=" pb-[96px] pt-[96px]  md:w-[496px] xl:w-[840px] xxl:w-[864px] ">
      <SvgSuccess className="mx-auto mb-3 h-[60px] w-[60px]" />
      <Paragraph variant="large" className="text-center">
        {data.success_message}{' '}
      </Paragraph>
      <Paragraph variant="large" className="text-center">
        {data.someone}
        <span className="block md:inline  "> {data.span_1}</span>
        <span className="block">{data.span_2}</span>
      </Paragraph>
    </div>
  );
};
