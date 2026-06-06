'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
  honeypot: z.string().optional(),
});

export async function sendContact(
  formData: FormData,
): Promise<{ success: boolean; error?: string }> {
  const raw = {
    name: String(formData.get('name') || ''),
    email: String(formData.get('email') || ''),
    message: String(formData.get('message') || ''),
    honeypot: String(formData.get('honeypot') || ''),
  };

  //  BOT DETECTION (honeypot filled)
  if (raw.honeypot) {
    return { success: true }; // silent fail (anti-spam trick)
  }

  const parsed = ContactSchema.safeParse(raw);

  if (!parsed.success) {
    console.log(parsed.error.flatten());
    return {
      success: false,
      error: 'Invalid form data',
    };
  }

  const { name, email, message } = parsed.data;

  try {
    await resend.emails.send({
      from: 'Monarch Portfolio <onboarding@resend.dev>',
      to: 'monarchpagcas@gmail.com',
      replyTo: email,
      subject: `New Message from ${name}`,
      html: `
<div style="font-family: Inter, system-ui, sans-serif; background:#000000; padding:40px;">
  <div style="max-width:600px;margin:0 auto;background:#171717;padding:24px;border:1px solid #1f2937;color:#fff;">

    <h2 style="font-size:18px;margin-bottom:20px;letter-spacing:0.5px;">
      NEW CONTACT MESSAGE
    </h2>

    <div style="margin-bottom:16px;">
      <p style="margin:6px 0;">NAME: ${name}</p>
      <p style="margin:6px 0;">EMAIL: ${email}</p>
    </div>

    <div style="margin-top:16px;padding:14px;background:#171717;border:1px solid #1f2937;white-space:pre-wrap;line-height:1.6;">
      ${message}
    </div>

    <div style="margin-top:24px;font-size:11px;text-align:center;">
      SENT FROM PORTFOLIO CONTACT FORM
    </div>

  </div>
</div>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error('Email error:', err);
    return {
      success: false,
      error: 'Email failed to send',
    };
  }
}
