// import { engine } from 'express-handlebars';
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

//Sets our app to use the handlebars engine
app.engine('handlebars',exphbs.engine({
    layoutsDir: __dirname + '/views/layouts',
}));
app.set('view engine', 'handlebars');
// app.set('views', 'views');

//Middlewares 
app.use(express.static(path.join(__dirname,'static')));
app.use('/',require(path.join(__dirname,'routes/blog.js')));

//Listening app
app.listen(port,()=>{
    console.log(`Blog app listening at http://localhost:${port}`);
})