import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, service, message } = body;

    const fullName = `${firstName} ${lastName}`;
    const safeMessage = message ? message.replace(/\n/g, '<br />') : '(No message provided)';

    const data = await resend.emails.send({
      from: 'harshalghate04@gmail.com',
      to: ['harshalghate004@gmail.com'],
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <strong>Name:</strong> ${fullName}<br />
        <strong>Email:</strong> ${email}<br />
        <strong>Phone:</strong> ${phone}<br />
        <strong>Service:</strong> ${service}<br /><br />
        <strong>Message:</strong><br />
        ${safeMessage}
      `,
    });

    return Response.json({ status: 'ok', data });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
