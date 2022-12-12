import express from 'express';

//controllers functions

const { signupUser, loginUser} = require('../controllers/userController')

const router = express.Router();

// login route

router.post('login', loginUser)

//signup route 

router.post('signup', signupUser)

// get user


module.exports = router