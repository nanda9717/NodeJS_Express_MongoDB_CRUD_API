const express = require('express');
const router = express.Router();
const UserController = require('../controller/user');

router.get('/', UserController.getUsers);

router.post('/', UserController.addUser);

router.get('/:id', UserController.getUserById);

router.put('/:id', UserController.updateUser);

router.patch('/:id', UserController.updateUserStatus);

router.delete('/:id', UserController.deleteUser);

module.exports = router;