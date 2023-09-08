import SvgSmileSad from '@/public/icons/smile-sad.svg';

import Paragraph from '../Parapgaph/Paragraph';

const ErrorWindow = () => {
  return (
    <div className=" pt-[96px] pb-[96px]  md:w-[496px] xl:w-[840px] xxl:w-[864px] ">
      <SvgSmileSad className="mx-auto h-[60px] w-[60px] mb-3" />
      <Paragraph variant ='lg' className="text-center">
        Щось пішло не так.
        <span className="block md:inline"> Спробуйте пізніше!</span>
      </Paragraph>
    </div>
  );
};

export default ErrorWindow;
