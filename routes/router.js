const express = require('express');

const router = express.Router();

const {handleGetAllUsers, handleCreateUser, handleUpdateUserInfoById, handleGetUserById, handleDeleteUserById} = require('../controllers/controller');

const User = require('../models/user');

router.route('/')
.get(handleGetAllUsers)
.post(handleCreateUser)

router.route('/:id')
.get(handleGetUserById)
.patch(handleUpdateUserInfoById)
.delete(handleDeleteUserById)

module.exports = router;