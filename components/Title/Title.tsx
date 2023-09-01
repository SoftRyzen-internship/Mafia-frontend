import React, { FC } from 'react';

interface TitleProps {
  children: React.ReactNode;
}

const Title: FC<TitleProps> = ({ children }) => {
  return <h1 className="text-xxl py-5 text-center font-bold ">{children}</h1>;
};

export default Title;
