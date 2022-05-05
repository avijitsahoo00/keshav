const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    categories:String,
    content: String,
    like: Number,
})

const blogModel = new mongoose.model( "blog", blogSchema);

module.exports = blogModel ;
