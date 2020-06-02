const fs= require ('fs');
const express=require ('express');
const path =require('path');
const bodyparser= require('body-parser');

const urlbody=bodyparser.urlencoded({extended:false});
const app =express();
app.use(bodyparser());
app.get('/',(req,res)=>{
    console.log(req.name);
    res.sendFile(__dirname + '/login.html');
});

app.listen(5000);
