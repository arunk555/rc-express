const createError = function(message, errcode){
 const error = new Error();
 error.statusCode = errcode ?? 500;
 error.message = message ?? 'Something went wrong!';
 throw error;
}


module.exports = { createError }