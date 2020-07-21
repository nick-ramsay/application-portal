require('dotenv').config();
const nodemailer = require("nodemailer");
const keys = require("../../keys");

const gmailUserId = keys.gmail_credentials.gmailUserId;
const gmailPassword = keys.gmail_credentials.gmailPassword;

console.log(keys.gmail_credentials);
console.log("Testing controller...");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUserId,
      pass: gmailPassword // naturally, replace both with your real credentials or an application-specific password
    }
  });
  
  const mailOptions = {
    from: 'applications.nickramsay@gmail.com',
    to: 'NickRamsay1989@gmail.com',
    subject: 'Invoices due',
    text: 'Dudes, we really need your money.'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  //transporter.sendMail();