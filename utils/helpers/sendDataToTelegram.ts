import { FieldValues } from 'react-hook-form';

import { sendTelegramMessage } from '@/api';
import data from '@/data/telegramMessageTemplate.json';

export const sendDataToTelegram = async (formData: FieldValues) => {
  const { userName, phoneNumber, userComment } = formData;
  const { title, name, phone, comment } = data;

  const messageMarkup = `<b>${title}</b>\n
  ${name}${userName}
  ${phone}${phoneNumber}
  ${comment}${userComment}`;

  return await sendTelegramMessage(messageMarkup);
};

export default sendDataToTelegram;
