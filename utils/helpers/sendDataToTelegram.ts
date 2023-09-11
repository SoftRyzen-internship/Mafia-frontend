import sendTelegramMessage from '../../components/api/telegramBotAPI';
import { FieldValues } from 'react-hook-form';

export const sendDataToTelegram = async (formData: FieldValues) => {
  const { userName, phoneNumber, userComment } = formData;
  console.log(formData);

  const messageMarkup = `<b>Нова заявка з сайту:</b>\n\nІм'я: ${userName}\nНомер телефону: ${phoneNumber}\nКоментар: ${userComment}`;

  // Use formData to send the message to your Telegram bot API
  const success = await sendTelegramMessage(messageMarkup);
  if (success) {
    console.log('Message sent successfully');
  } else {
    console.error('Failed to send message');
  }
};

export default sendDataToTelegram;
