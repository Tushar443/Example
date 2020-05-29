// app={
//     get:function(param1,fun1){
       
//     }
// };
// app.get('./notes/:id',function(req,res){
//     const id = req={
//         params={
//             id:23
//         }
//     }
//     const details ={
//         id:new ObjectID(id)
//     };
//     db={
//         collection : function(notes){
//             return {
//                 findOne:function(details,funname){
//                     return {
//                         get : function(err,item){
//                             if(err){
//                                 res.send({'error': 'An error has occured'});
//                             }else{
//                                 res.send(item)
//                             }
//                         }
//                     }
                   
//                     }
//                 }
//             }
//         }
//     });

// app={
//     post:function(param,fun1){

//     }
// };
// app.post('String',function(req,res){
//         const note =
//         {
//             text:req={
//                     body={
//                         body:'xyz'
//                     }
//                  },
//             title:req={
//                     body={
//                         title:'abc'
//                     }
//                 }
//         };
//         db={
//             collection: function(notes){
//                 return {
//                     insert: function(note, namefun){
//                         return{
//                             function(err,item){
//                                 if(err){
//                                     res.send({'error': 'An error has occured' +err});
//                                 }else{
//                                     res.send(result.ops[0])
//                                 }
//                             }
//                         }
                        
//                     }
//                 }
//             } 
//         }
//     });




// app={
//     delete: function(path,fun1){
//         return {}
//     }
// }
// app.delete(path,(req,res)=>{
//         const id ={
//             req={
//                 params={ id:34}
//             }
//         }
//         const details ={
//             '_id': new ObjectID(id)
//         }
//         const note ={
//             text:{
//                 req={ body:{body :"ertg" }}
//             },
//             title:{
//                 req={body={title: 'title' } }
//             }
//         }
//         db={
//             collection:function(String){
//                 return {
//                     remove: function(details,namefun){
//                         return {
//                             function(err,item){
//                                 if(err){
//                                     res.send(`error': 'An error has occured deleting`);
//                                 }
//                                 else {
//                                     res.send(`note' +id 'deleted!`);
//                                 }
//                             }
//                         }
                        
//                 }
//             }
//         }
// }});




// app={
//     put : function(path,fun1){
        
//     }
// }
// app.put(path,(req,res)=>{
//     const id ={
//              req={params={ id:34} }
//                 }
//                 const details ={
//                     '_id': new ObjectID(id)
//                 }
//                 const note ={
//                     text:{
//                         req={ body:{body :"ertg" }}
//                     },
//                     title:{
//                         req={body={title: 'title' } }
//                     }
//                 }
//     db={
//         collection : function (string){
//             return {
//                 update: function (details,funname){
//                     return {
//                         function(err,result){
//                             if (err){
//                                 res.send({'error': 'erroe occured' +err});
//                             }else{
//                                     res.send(result);
//                             }
//                         }
//                     }
                    
//                 }
//             }
//         }
//     }
// });




























