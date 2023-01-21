const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./server/database/connection');
const app = express();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8080
//// path to our logo icon/favicon
app.use(favicon(path.join(__dirname,'public','favicon.ico')));
// log requests
//Create a new named format
morgan.token("custom", "HTTP :http-version :method :url => :status :response-time ms :remote-addr :date")
//use the new format by name
app.use(morgan('custom'));
// mongodb connection 
connectDB();

// parse request to body-parser
app.use(express.json());
app.use(express.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// load routers
app.use('/', require('./server/routes/router'))
app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});
