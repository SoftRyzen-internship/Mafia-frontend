import { Paragraph } from '@/components/Paragraph';
import SvgSuccess from '@/public/icons/success.svg';
import data from '@/data/common.json';

const { onSuccess } = data.onFormSubmitNotify;

export const SuccessWindow = () => {
  return (
    <div className="flex flex-col items-center gap-[6px]">
      <SvgSuccess width={60} height={60} />
      <Paragraph variant="large" className="max-w-[401px] text-center">
        {onSuccess}
      </Paragraph>
    </div>
  );
};
