import classNames from 'classnames';

import Heading from '@/components/Heading/Heading';

import { ContactsProps } from '@/types';

import data from '@/data/common.json';

export const Contacts: React.FC<ContactsProps> = ({ variant = 'basic' }) => {
  const { title, address, phone } = data.contacts;

  const contactListStyles = classNames(
    'flex flex-col mt-6 text-white-light font-normal',
    {
      'gap-5 text-base leading-6': variant === 'basic',
      'gap-7 text-base leading-6': variant === 'mob-menu',
      'gap-6 text-sm leading-5': variant === 'footer-mob',
    },
  );

  const addressStyles = classNames('flex', {
    'gap-1': variant === 'basic' || 'mob-menu',
    'flex-col gap-0': variant === 'footer-mob',
  });

  const headingVariant = variant === 'footer-mob' ? 'secondary' : 'tertiary';

  return (
    <>
      <Heading variant={headingVariant}>{title}</Heading>
      <ul className={contactListStyles}>
        <li className={addressStyles}>
          <span>{address.city},</span>
          <span>{address.street}</span>
        </li>
        <li className="flex flex-col">
          {phone.map(num => (
            <span key={num}>{num}</span>
          ))}
        </li>
      </ul>
    </>
  );
};
