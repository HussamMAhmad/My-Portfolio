import { EMAIL_SENDING } from "./templates";
import { transporter } from "./transporter";

interface messageProps {
  name: string;
  email: string;
  phone: string;
  subject: string;
  mes: string;
}

export const sendEmail = async ({ data }: { data: messageProps }) => {
  try {
    const templete = EMAIL_SENDING.replace("{{name}}", data.name)
      .replaceAll("{{email}}", data.email)
      .replaceAll("{{phone}}", data.phone)
      .replaceAll("{{subject}}", data.subject)
      .replaceAll("{{message}}", data.mes);
    const message = {
      from: data.email,
      to: process.env.NODE_MAILER_USER,
      subject: data.subject,
      replayTo: data.email,
      text: `📩 New Portfolio Message from ${data.name}`,
      html: templete,
    };

    const info = await transporter.sendMail(message);
    return { success: true, message: info.messageId };
  } catch (e) {
    console.error("error while sending mail :", e);
    return { success: false, error: e };
  }
};
