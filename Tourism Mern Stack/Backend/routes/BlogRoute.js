const express = require('express');
const router = express.Router();
const Blog = require('../Schema/Blog');

// Create a blog post
router.post('/blogs', async (req, res) => {
    try {
        const blog = new Blog(req.body);
        const savedBlog = await blog.save();
        res.json(savedBlog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all blog posts
router.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a blog post
router.put('/blogs/:id', async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedBlog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a blog post
router.delete('/blogs/:id', async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.json({ message: 'Blog post deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
