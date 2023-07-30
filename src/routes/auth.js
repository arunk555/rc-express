const express = require("express");
const logger = require("../utills/logger");
const auth_router = express.Router();

auth_router.use('/auth/register', (req, res, next)=>{
    logger.info('Just auth->register');
    setTimeout(() => {
        try {
            const number = 10;
            res.status(200).json({
                success: true,
                message: number.toUpperCase()
            });
            //throw new Error('Just for testing the error!')
        } catch (error) {
            error.statusCode = 500;
            next(error);
        }
    }, 1000);
    

});


module.exports = auth_router;