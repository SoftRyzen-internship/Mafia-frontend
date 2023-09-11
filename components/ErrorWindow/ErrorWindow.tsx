import SvgSmileSad from '@/public/icons/smile-sad.svg';

import { Paragraph } from '@/components/Paragraph';

import data from '@/data//error.json';

export const ErrorWindow = () => {
  return (
    <div className=" pb-[96px] pt-[96px]  md:w-[496px] xl:w-[840px] xxl:w-[864px] ">
      <SvgSmileSad className="mx-auto mb-3 h-[60px] w-[60px]" />
      <Paragraph variant="large" className="text-center">
        {data.error_message}
        <span className="block md:inline"> {data.advice}</span>
      </Paragraph>
    </div>
  );
};
