import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, subject, message } = await req.json();

    // Send the email
    const response = await resend.emails.send({
      from: "contact@yourdomain.com", // Use your verified domain email
      to: "elhamehrabi@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      text: `From: ${email}\n\n${message}`,
    });

    return Response.json({ success: true, response });
  } catch (error: any) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
