const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
    const read=fs.createReadStream('./StaticFileSystem/Login.html');
    res.writeHead(200,{'content-type':'text/html'});
    read.pipe(res);
}).listen(5000);