const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const msg = {
//   to: "skaushik9313@gmail.com",
//   from: "skaushik9313@gmail.com",
//   subject: "Sending with Twilio SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>"
// };

// sgMail.send(msg);

//Sending Email Whenever a new user signup
const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "skaushik9313@gmail.com",
    subject: "Sending with Twilio SendGrid",
    text: `GoodBye! ${name}`,
    html: "<strong><em>and easy to do anywhere, even with Node.js</strong><em>"
  });
};

//Sending Email whenever a the user is deleted
const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "skaushik9313@gmail.com",
    subject: "Sending with Twilio SendGrid",
    text: `Welcome to the app ${name} just created. Let me know user experience.`,
    html: "<strong><em><h3>I decided to remove your account.<h3></strong><em>"
  });
};

module.exports = { sendWelcomeEmail, sendCancelationEmail };
