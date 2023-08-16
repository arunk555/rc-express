const { validationResult } = require('express-validator');
const { createUser } = require('../service/user');
const logger = require('../utills/logger');
const { doEncryption } = require('../utills/bcryptjs');
const { makehttprequest } = require('../utills/makehttprequest');

const createUserHandler = async (req, res, next) => {
    console.log( req.body)
    const result = validationResult(req);
    console.log(result)
    let { name, email, password } = req.body;
    let emsg;
    try {
        if(result.isEmpty()){
            password = await doEncryption(password);
           // console.log(password);
            const user = await createUser({ name, email, password, roles: [{ role: 'Admin'}] });
            return res.status(201).json(user);
        }else{
            let error = new Error(`${result.errors[0]['path']} - ${result.errors[0]['msg']}`)
            error.statusCode = 400;
            throw error
        }

    } catch (error) {
        //error.statusCode = error.code === 11000 ? 409 : 500;
        next(error);
    }
};

const fetchtodo = async function(req, res, next){
    try {
        const id = req.params.id ?? '';
        console.log(`https://jsonplaceholder.typicode.com/todos/${id}`)
        const todos = await makehttprequest(`https://jsonplacseholder.typicode.com/todos/${id}`, {
            method: 'get',
            headers: {
                'Content-type' : 'application/json'
            }
        });
        return res.status(200).json(todos); 
    } catch (error) {
        next(error);
    }
}


module.exports = { createUserHandler, fetchtodo };
