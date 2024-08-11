const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define the blog schema
const blogSchema = new Schema({
    title: { type: String, required: true },
    date: { type: Date, default: Date.now },
    image: { 
        type: String, required: true
    },
    author: { type: String, required: true },
    description: { type: String, required: true }
   
});

// Create a model from the schema
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
