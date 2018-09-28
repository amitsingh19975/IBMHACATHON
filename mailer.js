var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'eyeframe.ai@gmail.com',
    pass: 'bahuamitayu246'
  }
});

module.exports = {
  send: function(to, sub, text) {
    var mailOptions = {
      to: `${to}`,
      subject: `${sub}`,
      text: `${text}`,
      attachments: [
        {
          filename: 'message.wav',
          path: './message.wav'
        }
      ]
      // html: '<p> Your html here </p>'
      // attachments: [
      //   {
      //     filename: 'Alert_message',
      //     path: 'Alert_message.wav'
      //   }
      // ]
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) console.log(error);
      else console.log('Email sent: ' + info.response);
    });
  }
}