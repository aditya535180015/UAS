const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const tokoasikRouterAPI = require('./routes/tokoasikAPI')
const tokoasikContent = require('./routes/tokoasikContent')
const tokoasikAuth = require('./routes/tokoasikAuth')
const tokoasikProfile = require('./routes/tokoasikProfile')
const { mongoUri, PORT } = require('./config')
const cors = require('cors')
var cookieParser = require('cookie-parser');
var session = require('express-session');

mongoose
    .connect(mongoUri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))


// Static Files

// app.use(express.static(__dirname + '/public'));
// app.use('/sign',express.static(__dirname + '/public'));
// app.use('/profile',express.static(__dirname + '/public'));
// app.use('/profile/collection',express.static(__dirname + '/public'));
// app.use('/profile/photos',express.static(__dirname + '/public'));
// app.use('/category',express.static(__dirname + '/public'));
// app.use('/search',express.static(__dirname + '/public'));
// app.use('/photo',express.static(__dirname + '/public'));
// app.use('/popular',express.static(__dirname + '/public'));
// app.use('/upload',express.static(__dirname + '/public'));



// Set Views
app.get(session({secret: 'mySecret', resave: false, saveUninitialized: false}));
//configure the options however you need them, obviously
app.get(expressLayouts)
app.get(cookieParser());

app.set('layout', './layouts/layout')
// app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded()); 
app.use(bodyParser.json())
app.use('/sign',tokoasikAuth)
app.use('/profile',tokoasikProfile)
app.use('/api/images',tokoasikAPI)
app.use(tokoasikContent)

app.get("*", async (req, res) => {
    res.render("404", { layout: false });
  });

app.listen(process.env.PORT||3000)
