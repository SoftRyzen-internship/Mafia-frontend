import classNames from 'classnames';

import { reformatPhoneNumber } from '@/utils';

import { Heading } from '@/components/Heading';

import { ContactsProps } from '@/types';

import data from '@/data/common.json';

export const Contacts: React.FC<ContactsProps> = ({ variant = 'basic' }) => {
  const { title, address, phone } = data.contacts;

  const contactListStyles = classNames(
    'flex flex-col mt-6 text-white-light font-normal not-italic',
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
      <address className={contactListStyles}>
        <p className={addressStyles}>
          <span>{address.city},</span>
          <span>{address.street}</span>
        </p>
        <a href={`tel:${phone}`}>{reformatPhoneNumber(phone)}</a>
      </address>
    </>
  );
};
