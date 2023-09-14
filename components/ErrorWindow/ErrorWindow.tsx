import { Paragraph } from '@/components/Paragraph';
import SvgSmileSad from '@/public/icons/smile-sad.svg';
import data from '@/data/common.json';

const { onError } = data.onFormSubmitNotify;

export const ErrorWindow = () => {
  return (
    <div className="flex flex-col items-center gap-[12px]">
      <SvgSmileSad width={60} height={60} />
      <Paragraph variant="large" className="text-center smOnly:w-[264px]">
        {onError}
      </Paragraph>
    </div>
  );
};
