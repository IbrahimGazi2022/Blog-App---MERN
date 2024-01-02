const express = require('express');
const { getAllUsers, loginController, registerController } = require('../controllers/userController');

// Router Object
const router = express.Router();

// REGISTER USER || POST
router.post('/register', registerController);


// GET ALL USER || GET
router.get('/all-users', getAllUsers);


// LOGIN USER || POST
router.post('/login', loginController);

module.exports = router;        