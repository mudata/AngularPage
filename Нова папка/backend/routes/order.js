const express = require("express");
var Cart = require("../models/cart");
const router = express.Router();
const Order=require('../models/order');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mudata19191@gmail.com',
        pass: '595753515qm'
    }
});
router.post("", (req, res, next) => {
    
    // console.log(req.body);
    // console.log(req.body._id);
     while(Cart.length > 0) {
         Cart.pop();
        
    }
// console.log(req.body.orderData)
    var mailOptions = {
        from: `${req.body.contact.email}`,
        to: 'mudata19191@gmail.com',
        tel: `${req.body.contact.tel}`,
        name: `${req.body.contact.name}`,
        order:`${req.body.items}`
     };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          Cart=[];
          console.log('Email sent: ' + info.response);
        }
      });
});

module.exports = router;
