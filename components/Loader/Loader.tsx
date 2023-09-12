'use client';

import { PuffLoader } from 'react-spinners';

export const Loader = ({ className, size, color }) => {
  return (
    <div
      className={`flex items-center justify-center ${className && className}`}
    >
      <PuffLoader size={size} color={color} />
    </div>
  );
};
