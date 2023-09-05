import React, { FC } from 'react';
import { ParagraphProps } from '@/types';

// default styles for Paragraph

// font-size: 16px;
// font-weight: 400;
// line-height: 24px;

const Paragraph: FC<ParagraphProps> = ({ content, className }) => {
  return <p className={className}>{content}</p>;
};

export default Paragraph;
