import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, company, phone_no, description } = await req.json(); // Expecting JSON data

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.RECIPIENT_EMAIL,
      subject: ` AK Enginners New Message from ${name}`,
      text: `
        You have received a new message from a client.

        Name: ${name}
        Email: ${email}
        Company: ${company}
        Phone No: ${phone_no}
        Message: ${description}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing the request:", error);
    return new Response("Failed to send email", { status: 500 });
  }
}

export const runtime = "nodejs";
