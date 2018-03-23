const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path');

const config = require("./config");

const app = express();

mongoose.connect(config.database, { useMongoClient: true }, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to the database');
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use('/assets', express.static(path.join(__dirname, './assets')));

const mainRoutes = require('./routes/main');

app.use('', mainRoutes);

app.listen(config.port, err => {
    console.log('Magic happens on port awesome ' + config.port);
});
