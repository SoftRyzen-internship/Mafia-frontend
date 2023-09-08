import classNames from 'classnames';

import { reformatPhoneNumber } from '@/utils';

import { Heading } from '@/components/Heading';

import { ContactsProps } from '@/types';

import data from '@/data/common.json';

export const Contacts: React.FC<ContactsProps> = ({ variant = 'footer' }) => {
  const { title, address, phone } = data.contacts;

  const contactListStyles = classNames(
    'flex flex-col mt-6 text-white-light font-normal not-italic',
    {
      'gap-7 text-base leading-6': variant === 'mobile-menu',
      'gap-6 text-sm leading-5 md:gap-5 md:text-base md:leading-6':
        variant === 'footer',
    },
  );

  const addressStyles = classNames('flex', {
    'gap-1': variant === 'mobile-menu',
    'flex-col gap-0 md:flex-row md:gap-1': variant === 'footer',
  });

  const headingStyles = classNames({
    'smOnly:font-semibold': variant === 'footer',
  });

  return (
    <>
      <Heading variant={'tertiary'} tag="h3" className={headingStyles}>
        {title}
      </Heading>
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
