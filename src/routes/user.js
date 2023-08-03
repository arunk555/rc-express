const express = require('express');
const logger = require('../utills/logger');
const { createUserHandler } = require('../controller/user');
const auth_router = express.Router();

auth_router.post('/user/register', createUserHandler);

module.exports = auth_router;
