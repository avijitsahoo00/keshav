const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();


app.listen(8000, ()=>{
    console.log(8000  );
    console.log( "port is running" );
} );

mongoose.connect(process.env.DB).then(()=>{console.log('DB connent')}).catch(()=>{console.log('error')})