const fs =require ('fs');

/** Read the file */
// fs.readFile('./FileSystem/example.txt','utf8',(err,data)=>{
//     if(err)
//         console.log(err);
//     else
//         {
//             console.log(data);
//            // console.log(data.toString());
//         }  
// });

/** create a file and add data */
// fs.writeFile('./FileSystem/example2.txt','THIS IS SMAPLE DATA',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else
//     {
//         console.log('file created');
//     }
// });

/** Append the Data */
// fs.appendFile('./FileSystem/example2.txt','MY NAME IS TUSHAR',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Append');   
//      }
// });

/** Rename the Data */
// fs.rename('./FileSystem/example2.txt','./FileSystem/example3.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else
//     {
//         console.log('rename');
//     }
// });

/** Delete the file */
// fs.unlink('./FileSystem/example3.txt',(err)=>{
//    if(err)
//     console.log(err);
//     else
//     console.log('delete')
// });

/** create New Folder and Add one File and Some Data to it */
// fs.mkdir('./FileSystem/Tushar',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else
//     {
//         console.log('folder created');
//         fs.writeFile('./FileSystem/Tushar/Example2.txt','HELLO MR.MORE',(err)=>{
//             if(err){
//                     console.log(err);
//             }
//             else
//             {
//                 console.log('file created');
//             }
//         });
//     }
// });

/**Delete Empty Folders */
// fs.rmdir('./FileSystem/Tushar',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('remove');
//     }
    
// });

/**Delete Multiples file contain folders */
// fs.readdir('./FileSystem/Tushar',(err,files)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         //console.log(files);
//         for(let file of files){
//             fs.unlink('./FileSystem/Tushar/'+file,(err)=>{
//                     if(err){
//                         console.log(err);
//                     }
//                     else{
//                         console.log('deleted');
//                     }
//             });
//         }
//     }
// });









































