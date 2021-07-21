const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gmail',
    pass: 'senha'
  },
  tls: {
      rejectUnauthorized: false // you need to change the secure app access on your gmail. Find on google "gmail less secure apps". 
  }
});

let mailOptions = {
  from: 'noreplygmail <umgmail@gmail.com>',
  to: 'umgmail@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, success){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + success.response);
  }
});