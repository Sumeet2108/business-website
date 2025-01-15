import nodemailer from "nodemailer";

// export async function POST(req) {
//   const { name, email, company, phone_no, description } = await req.json();

//   // Create a transporter using Outlook's SMTP details
//   const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT,
//     secure: false,
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASSWORD,
//     },
//   });

//   // Email options
//   const mailOptions = {
//     from: process.env.EMAIL_FROM,
//     to: process.env.RECIPIENT_EMAIL, // Recipient address (your email)
//     subject: `New message from ${name}`, // Email subject
//     text: `You have received a new message from ${name} (${email})\n\nCompany: ${
//       company || "N/A"
//     }\nPhone: ${phone_no}\n\nMessage:\n${description}`, // Email body
//   };

//   try {
//     // Send email
//     await transporter.sendMail(mailOptions);
//     return new Response("Message sent successfully!", { status: 200 });
//   } catch (error) {
//     return new Response("Error sending email: " + error.message, {
//       status: 500,
//     });
//   }
// }

//here
export async function POST(req) {
  const formData = await req.formData();
  
  // const email = formData.get("email");
  // const question = formData.get("question");
  // const description = formData.get("description");
  // const file = formData.get("image");

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
      to: process.env.RECIPIENT_EMAIL, // Recipient address (your email)
      subject: `New message from ${name}`, // Email subject
      text: `You have received a new message from ${name} (${email})\n\nCompany: ${
        company || "N/A"
      }\nPhone: ${phone_no}\n\nMessage:\n${description}`, // Email body
    };

    await transporter.sendMail(mailOptions);

    if (file) {
      await cleanupTempFile(file);
    }

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing the request:", error);
    return new Response("Failed to send email", { status: 500 });
  }
}
