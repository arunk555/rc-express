const UserModel = require('../models/user');

exports.createUser = function (user) {
    console.log(user)
    return UserModel.create(user);
};

exports.findUserById = function (id) {
    return UserModel.findById(id);
};

exports.findUserByEmail = function (email) {
    return UserModel.findOne({ email });
};
