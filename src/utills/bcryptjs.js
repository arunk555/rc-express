const { hash, genSalt, compare } = require("bcryptjs");
const { SALT_WORK_FACTOR } = require("../config");
const logger = require("./logger");

const doEncryption = async (password)=>{
    try {
       const salt =  await genSalt(parseInt(SALT_WORK_FACTOR));
       const encrypted = await hash(password, salt);
       return encrypted;
    } catch (error) {
        logger.error(error.message)
    }
}

const doCompare = async (inputPassword, storedPassword)=>{
   return await compare(inputPassword, storedPassword);
}

module.exports = { doEncryption, doCompare };