const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost'); // Assuming you have a BlogPost model

router.get('/dashboard', async (req, res) => {
    // Fetch blog posts from the database
    const blogPosts = await BlogPost.findAll();

    // Render the dashboard view with the retrieved blog posts
    res.render('dashboard', { blogPosts });
});

module.exports = router;