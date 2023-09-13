import { FieldValues } from 'react-hook-form';

import axios from 'axios';
import data from '@/data/telegramMessageTemplate.json';

const sendDataToTelegram = async (formData: FieldValues): Promise<boolean> => {
  const { userName, phoneNumber, userComment } = formData;
  const { title, name, phone, comment } = data;

  const messageMarkup = `<b>${title}</b>\n
  ${name}${userName}
  ${phone}${phoneNumber}
  ${comment}${userComment}`;

  try {
    const response = await axios.post(`/api/telegram`, {
      text: messageMarkup,
    });

    if (response.data.status === 200) {
      return true;
    }
  } catch (error) {
    return false;
  }
  return false;
};

export default sendDataToTelegram;
