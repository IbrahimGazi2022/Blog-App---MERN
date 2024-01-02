const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

// create new Register user
exports.registerController = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check blank data
        if (!username || !email || !password) {
            return res.status(400).send({
                success: false,
                message: "Please fill all fields"
            });
        }

        // exisiting user or not
        const exisitingUser = await userModel.findOne({ email });
        if (exisitingUser) {
            return res.status(401).send({
                success: false,
                message: "User already created"
            });
        }

        // Password Hashded
        const hashdedPassword = await bcrypt.hash(password, 10);


        // save user data to database
        const user = new userModel({ username, email, password: hashdedPassword });
        await user.save();
        return res.status(200).send({
            success: true,
            message: 'Successfully New User created',
            user
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in register callback',
            error
        });
    }
};



// get all user
exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({});
        return res.status(200).send({
            userCount: users.length,
            success: true,
            message: "all users data",
            users
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in get all user',
            error
        });
    }
};

// Login
exports.loginController = () => { };