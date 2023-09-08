import React from 'react';
import Image from 'next/image';

interface SliderCard {
  id: number;
  name: string;
  alias: string;
  imageUrl: string;
}

interface SliderImageProps {
  card: SliderCard;
  isActive?: boolean;
}

export const SliderImage: React.FC<SliderImageProps> = ({
  card,
}: // isActive,
SliderImageProps) => {
  return (
    <div className="mb-7 aspect-[0.8] w-full overflow-hidden rounded-normal md:aspect-[0.69]">
      <Image
        className="h-full w-full object-cover"
        src={card.imageUrl}
        width={272}
        height={290}
        alt={card.name}
        quality={90}
        priority
      />
    </div>
  );
};
