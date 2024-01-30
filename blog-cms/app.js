const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const sequelize = require('./config/database');
const User = require('./models/User');
const BlogPost = require('./models/BlogPost');
const blogRoutes = require('./routes/blog/blog');
const authRoutes = require('./routes/blog/auth'); 


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));



// Use your blog routes
app.use('/blog', blogRoutes);

// Use auth routes with the /auth prefix
app.use('/blog/auth', authRoutes);

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}));

// Configure Handlebars
app.engine('handlebars', exphbs({
    extname: 'handlebars',
    defaultLayout: 'blogs',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials')
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Define a simple route for the root path
app.get('/', (req, res) => {
    res.redirect('/blog/posts');
});


sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});