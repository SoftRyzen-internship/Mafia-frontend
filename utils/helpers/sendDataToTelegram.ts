import { FieldValues } from 'react-hook-form';

// TODO: Need fix with paths, split api files with reexport to index
import sendTelegramMessage from '../../components/api/telegramBotAPI';
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
