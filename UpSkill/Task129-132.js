const fs = require ('fs');
fs.readFile('./FileSystem/example.txt','utf8',(err,data)=>{
        if(err)
            console.log(err);
        else
            console.log(data); 
    });
//   ##$$$$$$
try{
const data=fs.readFileSync('./UpSkill/example.txt','utf8')
         console.log(data);
}
catch(err){
    console.log(err);
}
//$$$$$####
 const data=fs.writeFileSync('./FileSystem/example2.txt','THIS IS SMAPLE DATA 2 another add','utf8')
        console.log(data);

//#######$$$$
fs.writeFile('./FileSystem/example2.txt','THIS IS SMAPLE DATA 2',(err)=>{
    if(err){
        console.log(err);
    }
    else
        console.log('file created');
});




/**Q 2nd Sudo Code  */

fs={
    writeFile: function(path,dataToWrite,callbackfun){
        return function(err){
            if(err){
                console.log(err);
            }
            else
                console.log('file created');
        }
    }
}


fs={
    writeFileSync: function(path,datToWrite,p3){
            return console.log('file created');
    }
}

//Q 3rd     

// Q 3 ==> Absolute Path - The Path with reference to root directory is called absolute path.
// 		For example:-'/views/src/folder/file.txt
// 		Relative Path - The path with reference to current directory is called relative path.
// 		For example:-'../../folder/file.txt'







/**Q 4  */
// const fs= require('fs');
// const express=require('express');
// const data = fs.readFileSync('./example2.json','utf-8');
//   const app=express();
// app.get('/',function(req,res){
//     res.send('Express Server works !!');
// });

// app.get('/json',function(req,res){ 
//    res.json(data);
//    res.end();
// });

// app.get('/text',function(req,res){
//     res.send(data);
//     res.end();
// });
// app.listen(5000);























