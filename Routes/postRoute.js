const express = require('express');
const postRoute = express.Router();
const blogSchema = require('../Model/blogSchema');

postRoute.post('/new', async (req, res) => {
    console.log(req.body)
   const {title,categories,content} =  req.body ;
   const postData = {title,categories,content}
   try{
       const newPost = new blogSchema(postData)
       const response = await newPost.save();
       res.send(response)
   }
   catch(error){
       console.log(error)
       res.send(error)
   }
})

postRoute.post("/edit/:id", async (req, res) => {
    // const {title,categories,content} =  req.body ;
    console.log(req.body);
    const postData = req.body ;
    const id = req.params.id
    try {
        const response1 = await blogSchema.findById(id);

       const response = await response1.update(postData);
        res.send(response)
    } catch (error) {
        res.send(error)
    }
});

postRoute.get("/get", async (req, res) => {
    // const {title,categories,content} =  req.body ;
    console.log(req.body);

    try {

       const response = await blogSchema.find();
        res.send(response)
        
    } catch (error) {
        res.send(error)
    }
})

postRoute.get("/getid/:id", async (req, res) => {
    // const {title,categories,content} =  req.body ;
    console.log(req.body);

    try {
        const id = req.params.id
       const response = await blogSchema.findById(id);
        res.send(response)
        
    } catch (error) {
        res.send(error)
    }
})

postRoute.post("/delete", async (req, res) => {

    try {
        const id = req.body.id;
        const response = await blogSchema.findByIdAndRemove(id);
        res.send(response);
    } catch (error) {
        res.send(error)
    }

})


module.exports = postRoute