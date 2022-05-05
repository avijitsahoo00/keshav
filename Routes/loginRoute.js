const express = require('express');
const logInRoute = express.Router();


logInRoute.post('/signup', (req, res) => {
   const {name, email, password} =  req.body ;
    
})