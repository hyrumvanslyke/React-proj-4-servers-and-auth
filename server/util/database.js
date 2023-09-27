require('dotenv').config()
const {CONNECTION_STRING} = process.env
const Seq = require('sequelize')

const seq = new Seq(CONNECTION_STRING, {
    dialect: 'postgres'
})

module.exports = {
    seq
}