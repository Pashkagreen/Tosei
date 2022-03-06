require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const mailOptions = {
  from: "grinpaul.work@gmail.com",
  to: "grinpaul.work@gmail.com",
  subject: "Письмо через node.js",
  text: "Текст самого письма",
};

transporter.sendMail(mailOptions);
