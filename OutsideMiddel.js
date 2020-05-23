module.exports = function(req,res,next){
    console.warn('Current path is ',req.originalUrl);
    next();
}