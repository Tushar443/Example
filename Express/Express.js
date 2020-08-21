const express=require ('express');

const app=express();
const path =require('path');

//Middelware
const checkurl = function(req,res,next){
    console.warn('Current path is ',req.originalUrl);
    next();
}
app.use(checkurl);

app.get('/',function(req,res){
    res.send('home pages is requested');
});
app.get('/about',function(req,res){
    res.send('About pages is requested');
});
app.get('/login',function(req,res){
    res.sendFile(path.join(__dirname+'/Login.html'));
});
app.get('/Register',function(req,res){
    res.sendFile(path.join(__dirname+'/Regis2.html'));
});
app.listen(5000);