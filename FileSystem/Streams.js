/**Read file and copy to destination file */
 const fs=require('fs');
// const readStreams=fs.createReadStream('./FileSystem/FileRead.js','utf8');
// const writeStreams=fs.createWriteStream('./FileSystem/Example10.txt');
// readStreams.on('data',(chunk)=>{
//         //console.log(chunk);
//         writeStreams.write(chunk);
// });

//Alternate methode to copy file 
// readStreams.pipe(writeStreams);

/** transfer file in ZIP compress type */

// const zlib =require('zlib');
// const gzip =zlib.createGzip();
// const readStreams=fs.createReadStream('./FileSystem/FileRead.js','utf8');
// const writeStreams=fs.createWriteStream('./FileSystem/Example10.txt.gz');
// readStreams.on('data',(chunk)=>{
//     readStreams.pipe(gzip).pipe(writeStreams);
// });


/** Again convert zip file to normal file */






