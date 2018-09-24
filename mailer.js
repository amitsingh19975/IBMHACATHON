var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'svr8svr8@gmail.com',
    pass: 'codinglesson14@learn.com'
  }
});

module.exports = {
  mail: function() {
    var mailOptions = {
      to: 'shikhar.vaish90@gmail.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy',
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