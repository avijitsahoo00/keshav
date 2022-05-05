const express = require('express');
const postRoute = express.Router();
const blogSchema = require('../Model/blogSchema');

postRoute.post('/new', (req, res) => {
    console.log(req)
//    const {title,categories,content} =  req.body ;
//    const postData = {title,categories,content}
//    try{
//        const newPost = new blogSchema(postData)
//        const response = await postData.save();
//        res.send(response)
//    }
//    catch{
//        console.log(error)
//        res.send(error)
//    }
})

postRoute.post("/edit/:id", (req, res) => {

})

module.exports = postRoute