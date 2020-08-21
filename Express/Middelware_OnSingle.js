const express=require ('express');

const app=express();
const path =require('path');

const router =express.Router();

//Middelware form outside
const checkurl=require('./OutsideMiddel.js');

//app.use(checkurl);  it is global so we have to remove this.
app.get('/',function(req,res){
    res.send('home pages is requested');
});
router.get('/about',checkurl,function(req,res){
    res.send('About pages is requested');
});
app.get('/login',function(req,res){
    res.sendFile(path.join(__dirname+'/Login.html'));
});
router.get('/Register',checkurl,function(req,res){
    res.sendFile(path.join(__dirname+'/Regis2.html'));
});
app.use('/',router);
app.listen(5000);