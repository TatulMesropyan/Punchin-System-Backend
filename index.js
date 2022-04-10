const express = require('express');
const mongoose = require('mongoose')
require('dotenv/config')
const app = express();


app.use('/punchin', () => {
    console.log("We are on punchin")
});

app.use('/registration', () => {
    console.log("We are on registration")
});

mongoose.connect(
    process.env.DB_CONNCECTION,
    { useNewUrlParse: true },
    () => {
        console.log("Connected to DB!")
    });

app.listen(3000)