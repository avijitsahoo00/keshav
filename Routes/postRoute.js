const express = require('express');
const postRoute = express.Router();


postRoute.post('/new', async(req, res) => {
    console.log(req.body)
   const {title,categories,content} =  req.body ;
   const postData = {title,categories,content}
   try{
       const newPost = new postRoute(postData)
       const response = await postData.save();
       res.send(response)
   }
   catch{
       console.log(error)
       res.send(error)
   }
})

module.exports = postRoute