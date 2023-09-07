import classNames from 'classnames';

import Heading from '@/components/Heading/Heading';

import { ContactsProps } from '@/types';

import data from '@/data/contacts.json';

export const Contacts: React.FC<ContactsProps> = ({ styles = 'basic' }) => {
  const contactListStyles = classNames(
    'flex flex-col mt-6 text-white-light font-normal',
    {
      'gap-5 text-base leading-6': styles === 'basic',
      'gap-7 text-base leading-6': styles === 'mob-menu',
      'gap-6 text-sm leading-5': styles === 'footer-mob',
    },
  );

  const addressStyles = classNames('flex', {
    'gap-1': styles === 'basic' || 'mob-menu',
    'flex-col gap-0': styles === 'footer-mob',
  });

  const headingVariant = styles === 'footer-mob' ? 'secondary' : 'tertiary';

  return (
    <>
      <Heading variant={headingVariant}>{data.title}</Heading>
      <ul className={contactListStyles}>
        <li className={addressStyles}>
          <span>{data.address.city},</span>
          <span>{data.address.street}</span>
        </li>
        <li className="flex flex-col">
          {data.phone.map(phone => (
            <span key={phone}>{phone}</span>
          ))}
        </li>
      </ul>
    </>
  );
};
