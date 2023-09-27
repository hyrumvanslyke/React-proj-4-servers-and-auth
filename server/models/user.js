const {DataTypes} = require('sequelize')

const {seq} = require('../util/database')

module.exports = {
    User : seq.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username: DataTypes.STRING,
        hashedPass: DataTypes.STRING
    })
}