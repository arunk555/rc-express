const { User } = require('../models/user');

exports.createUser = function (user) {
    return User.create(user);
};

exports.findUserById = function (id) {
    return User.findById(id);
};

exports.findUserByEmail = function (email) {
    return User.findOne({ email });
};
