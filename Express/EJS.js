//IN every ejs file for common Header We used this Syntax ==><%-include('Header');-%>
//for Common Style we want to apply to all we used express.static

const express=require ('express');
const app=express();

app.use('/views/Common_CSS',express.static('views/Common_CSS'))

app.set('view engine','ejs');
app.get('/profile/:name',function(req,res){
   // console.log(req.params.name);
   data ={email:'Tusharmoret33@gamil.com',Address:'Mumbai',Skills:['Node.js','JavaScript','Java',
   'CPP','Data Structure']};
    res.render('profile',{name:req.params.name});
   
});
app.get('/',function(req,res){
    res.render('Home');
});
app.get('/Login',function(req,res){
    res.render('Login');
});
app.listen(5000);