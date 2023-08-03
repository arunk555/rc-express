const { createUser } = require("../service/user");
const logger = require("../utills/logger");

const createUserHandler = async (req, res, next)=>{
    const {name, email, password} = req.body;
    try {
        const user = createUser({name, email, password});
        return res.status(201).json(user)
    } catch (error) {
        error.statusCode = (e.code === 11000) ? 409 : 500;
        next(error);
    }
}

module.exports = { createUserHandler }