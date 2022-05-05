const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    categories:String,
    content: String,
    like: Number,
})

const blogModel = new mongoose.Model( "blog", blogSchema);

module.exports = blogModel ;
