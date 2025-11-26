// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, mobile, description } = await req.json();

    if (!name || !email || !mobile || !description) {
      return new Response(JSON.stringify({ error: "All fields are required" }), {
        status: 400,
      });
    }

    // Read SMTP creds from environment
    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = parseInt(process.env.SMTP_PORT || "587", 10);
    const secure = process.env.SMTP_SECURE === "true" || false;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_TO; // e.g. khushistone2012@gmail.com

    if (!user || !pass || !toEmail) {
      console.error("SMTP credentials or recipient email not configured in environment");
      return new Response(
        JSON.stringify({ error: "Server email configuration missing" }),
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: `"Khushi Stone Contact Form" <${user}>`, // send from the configured SMTP user
      to: toEmail,
      subject: "New Enquiry from Contact Form",
      text: `
Name: ${name}
Email: ${email}
Mobile: ${mobile}
Description: ${description}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Description:</strong> ${description}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Enquiry sent successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
