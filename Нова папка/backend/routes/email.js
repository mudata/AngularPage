const express = require("express");
const router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mudata19191@gmail.com',
        pass: '595753515qm'
    }
});


router.post("", (req, res, next) => {

    console.log(req.body)
    var mailOptions = {
        from: `${req.body.from}`,
        to: 'mudata19191@gmail.com',
        subject: `${req.body.subject}`,
        text: `${req.body.text}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
});

module.exports = router;
