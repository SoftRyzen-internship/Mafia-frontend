import { FieldValues } from 'react-hook-form';
import axios from 'axios';
import data from '@/data/telegramMessageTemplate.json';

export const sendDataToTelegram = async (formData: FieldValues) => {
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

    console.log(response);

    if (response.data.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export default sendDataToTelegram;
