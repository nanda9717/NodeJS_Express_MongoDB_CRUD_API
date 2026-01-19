const express = require('express');
const router = express.Router();
const {getUsers, addUser, getUserById, updateUser, updateUserStatus, deleteUser} = require('../controller/user');

router.get('/', getUsers);

router.post('/', addUser);

router.get('/:id', getUserById);

router.put('/:id', updateUser);

router.patch('/:id', updateUserStatus);

router.delete('/:id', deleteUser);

module.exports = router;