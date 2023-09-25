require('dotenv').config()
const jwt = require('jsonwebtoken')// need to require jwt 
const {SECRET} = process.env// bring in the secret from .env

module.exports = {
    isAuthenticated: (req, res, next) => {// express function using middle where with three params
        const headerToken = req.get('Authorization')

        if (!headerToken) {// if no header token return an error
            console.log('ERROR IN auth middleware')
            res.sendStatus(401)
        }

        let token

        try {// try catch block for testing if the token is authenticated
            token = jwt.verify(headerToken, SECRET)
        } catch (err) {
            err.statusCode = 500
            throw err
        }

        if (!token) {// if its not authenticated then we throw an error
            const error = new Error('Not authenticated.')
            error.statusCode = 401
            throw error
        }

        next()// next so we can exicute the next middleware
    }
}