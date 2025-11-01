import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.FROM_EMAIL;

  if (!resendApiKey || !fromEmail) {
    return NextResponse.json(
      { error: "Email service is not configured. Please set RESEND_API_KEY and FROM_EMAIL environment variables." },
      { status: 500 }
    );
  }

  const resend = new Resend(resendApiKey);

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
