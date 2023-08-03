const { User } = require("../models/user");

export function createUser(user){
   return User.create(user);
}

export function findUserById(id){
    return User.findById(id);
}

export function findUserByEmail(email){
    return User.findOne({ email });
}