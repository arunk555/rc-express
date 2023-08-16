const express = require('express');
const logger = require('../utills/logger');
const { createUserHandler, fetchtodo } = require('../controller/user');
const { body } = require('express-validator');
const auth_router = express.Router();

const validate = [body('name').notEmpty().withMessage('Name is mandatory field!'), body('email').isEmail().withMessage('Not a valid e-mail address'), body('password').isStrongPassword()]

auth_router.post('/user/register', validate,  createUserHandler);
auth_router.get('/user/todos/:id?', fetchtodo);

auth_router.get('/users', (req, res)=>{
    res.status(200).json({
        massage: 'to get users'
    })
});

module.exports = auth_router;
