const express = require('express');
const data = require('./NewFile');
const app = express();
app.get('/', function (req, res) {
    //    res.json(data);
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
    console.log(data);
});
app.listen(5000);