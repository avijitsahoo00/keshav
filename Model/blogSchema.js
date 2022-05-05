const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    like: Number,
    postDate: Date,
})

const blogModel = new mongoose.Model( "blog", blogSchema);

module.exports = blogModel ;
