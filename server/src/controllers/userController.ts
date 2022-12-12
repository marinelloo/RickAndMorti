// login user
import { RequestHandler } from "express"

const loginUser: RequestHandler = async (req, res) => {
    res.json({mssg: 'login user'})
} 

// signup user

const signupUser: RequestHandler = async (req, res) => {
    res.json({mssg: 'signup user'})
} 

module.exports = {signupUser, loginUser}