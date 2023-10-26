const express = require('express');
const blogs = require('../data/blogs');
const path = require('path');
const router = express.Router();

//Route for index
router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../views/index.html'));
    res.render('home');
})

router.get('/blog',(req,res)=>{
    // blogs.forEach(e => {
    //     console.log(e.title);
    // });
    // res.sendFile(path.join(__dirname,'../views/blogHome.html'));
    res.render('blogHome',{
        blogs : blogs
    });
})
router.get('/about',(req,res)=>{
    res.render('about');
})
router.get('/blogpost/:slug',(req,res)=>{
    myBlogs = blogs.filter((e)=>{
        // console.log(e.slug);
        return e.slug == req.params.slug;
    })
    res.render('blogpage',{
        title : myBlogs[0].title,
        content : myBlogs[0].content,
        author : myBlogs[0].author,
        date: myBlogs[0].date
    })
});

module.exports = router;