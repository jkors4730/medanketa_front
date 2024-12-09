require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(`${process.env.FRONT}/dist`));

app.all('*',(_req, res) => {
    res.sendFile( path.join(__dirname, `${process.env.FRONT}/dist/index.html`) );
});

app.listen(process.env.PORT);