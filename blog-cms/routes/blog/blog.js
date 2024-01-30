const express = require('express');
const router = express.Router();
const path = require('path');  // Import the path module
const fullPath = path.join(__dirname, 'views', 'blog', 'posts.hbs');
console.log('Full path:', fullPath);
const BlogPost = require('../../models/BlogPost');



// Display all blog posts
router.get('/posts', async (req, res) => {
    try {
        const blogPosts = await BlogPost.findAll();
        res.render('blog/posts', { blogPosts }); // Check this path
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { message: 'Internal Server Error' });
    }
});
// Display a specific blog post
router.get('/posts/:postId', async (req, res) => {
    const postId = req.params.postId;

    try {
        const blogPost = await BlogPost.findByPk(postId);

        if (!blogPost) {
            // Handle post not found
            res.status(404).render('error', { message: 'Blog post not found' });
            return;
        }

        res.render('blog/post', { blogPost });
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { message: 'Internal Server Error' });
    }
});
// Display a form to create a new blog post
router.get('/create-post', (req, res) => {
    // Render the 'blog/create-post' view for creating a new blog post
    res.render('blog/create-post');
});

// Handle the creation of a new blog post
router.post('/create-post', async (req, res) => {
    const { title, content } = req.body;

    try {
        // Validate input if needed

        // Create a new blog post in the database
        const newBlogPost = await BlogPost.create({ title, content });

        // Redirect to the newly created post
        res.redirect(`/blog/posts/${newBlogPost.id}`);
    } catch (error) {
        // Handle errors with a 500 Internal Server Error response
        console.error(error);
        res.status(500).render('error', { message: 'Internal Server Error' });
    }
});

router.get('/homepage', (req, res) => {
    // Your logic for rendering the homepage goes here
    res.render('homepage', { /* Your data here */ });
  });

  router.get('/signup', (req, res) => {
    // Your logic for rendering the sign-up page goes here
    res.render('signup', { /* Your data here */ });
});

router.get('/login', (req, res) => {
    res.render('login', { /* Your data here */ });
  });
  
  

module.exports = router;