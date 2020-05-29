const fs= require('fs');
const express=require('express');
const data = fs.readFileSync('./test2.json','utf-8');
  const app=express();
app.get('/',function(req,res){
  res.send('express API!!');
});
app.get('/json',function(req,res){ 
   res.json(data);
   res.end();
});

app.get('/text',function(req,res){
    res.send(data);
    res.end();
});
app.listen(5000);





















// if(req.url ==='/')
// res.send('Express Api !!');
// else if(req.url ==='/json')
//     res.json(data);
// else if(req.url ==='/text')
//     res.send(data);
// else
// res.send('Invlid');
// });