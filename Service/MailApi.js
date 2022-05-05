const express = require('express')
const nodemailer = require('nodemailer');
require('dotenv').config();


const mailApi = async (req, res)=>{
  let to= req.body.to
  let subject=req.body.subject
  let content= req.body.content
  try {
    if (to!==undefined && subject!==undefined && content!==undefined) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
     
        auth: {
          user: process.env.email,
          pass: process.env.pass
        }
      });
    
    var mailOptions = {
        from: process.env.email,
        to,
        subject,
        html: content
      };
      
   const  respon= await transporter.sendMail(mailOptions)
  console.log(req.body) 
   res.status(201).json(req.body)
    
    } else {
      
      res.status(401).json('please check the sender or subject or content')
    
    }


  } catch (error) {
    
      res.send(error)
      console.log(req.body);
  }
}

module.exports = mailApi;