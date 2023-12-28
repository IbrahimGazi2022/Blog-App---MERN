const express = require('express');
const { getAllUsers, loginController, registerController } = require('../controllers/userController');


// Router Object
const router = express.Router();

// GET ALL USER || GET
router.get('/all-users', getAllUsers);

// REGISTER USER || POST
router.post('/register', registerController);

// LOGIN USER || POST
router.post('/login', loginController);

module.exports = router;        