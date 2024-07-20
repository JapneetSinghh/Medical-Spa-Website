// Importing Express
const express = require('express');
const app = express();
require("dotenv").config();

const path = require('path');
// Setting up the ejs template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serving Public folder As Static For Assets And Css
app.use(express.static(path.join(__dirname, 'public')));

const homeRoutes = require('./routes/home')
const dashboardRoutes = require('./routes/dashboard')

app.use(homeRoutes.router);
app.use(dashboardRoutes.router);

// ADDING ERROR 404 PAGE
const errorController = require('./controller/error404');
app.use(errorController.get404);
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log('Listening on port ' + PORT);
})

