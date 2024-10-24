const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
require("dotenv").config(); // Load environment variables from .env file

// Set up Nodemailer using environment variables
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_EMAIL, // Read email from .env file
    pass: process.env.GMAIL_PASSWORD, // Read password from .env file
  },
});

// Define the cloud function to send the email
exports.sendContactForm = functions.https.onRequest((req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const {firstName, lastName, email, message} = req.body;

  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL, // Read recipient email from .env file
    subject: `Contact Form Submission from ${firstName} ${lastName}`,
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send("Failed to send email");
    }
    console.log("Email sent:", info.response);
    return res.status(200).send("Email sent successfully");
  });
});
