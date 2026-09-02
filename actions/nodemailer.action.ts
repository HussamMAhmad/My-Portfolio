"use server";
import { sendEmail } from "@/lib/nodemailer/email-service";

interface messageProps {
  name: string;
  email: string;
  phone: string;
  subject: string;
  mes: string;
}

export async function submitContactForm({ data }: { data: messageProps }) {
  if (!data.name || !data.email || !data.phone || !data.mes) {
    return { success: false, message: "name or email missing" };
  }
  try {
    const result = await sendEmail({ data });
    if (!result?.success) {
      return {
        success: false,
        message: result?.error || "something wrong when sending mail",
      };
    }

    return { success: true, message: "success sending" };
  } catch (error) {
    console.error("Action error: ", error);
    return { success: false, message: "something wrong with action" };
  }
}
