// telegramApi.ts
import axios from 'axios';

const sendTelegramMessage = async (message: string) => {
  const TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID;
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  try {
    const response = await axios.post(URI_API, {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: 'HTML',
    });

    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
};

export default sendTelegramMessage;
