const jwt = require('jsonwebtoken')
require('dotenv').config()
const SECRET = process.env.SECRET
const User = require('../models/post')
const bcrypt= require('bcryptjs')
const createToken = (username, id) =>{
return jwt.sign(
    {
        username: username,
        id: id
    },
    SECRET,
    {
        expiresIn : "2 days"
    }
)
}

module.exports = {
    login: async (req,res) =>{
        let {username, password} = req.body
        const token = createToken(username, password)
        res.sendStatus(200).send(token)
    },
    register: async (req, res) =>{
        // try{
        //     const {username, password} = req.body
        //     const foundUser = await User.findOne({where: {username: username}})

        // }if(foundUser){
        //     else{

        // } catch(err){
        //     console.error(err)
        //     res.status(400).send(err)
        // }
    }
}