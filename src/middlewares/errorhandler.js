const { NODE_ENV } = require("../config/config");

const errorhandler = (error, req, res, next)=>{
    console.log("Middleware => Error Handler");
    const { statusCode, message, stack}= error;
    const stcode = statusCode || 500;
    const msg = message || 'Something went wrong!';

    res.status(stcode).json({
        success: false,
        message: msg,
        stack: (NODE_ENV === "development") ? stack : {}
    });
}

module.exports = errorhandler;