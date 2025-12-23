// // models/User.js
// const Sequelize=require("sequelize")
// const sequelize = require('../utils/database')

// const User = sequelize.define('User', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: Sequelize.STRING,
//     unique: true,
//     allowNull: false,
//   },
//   password: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
// }, {
//   tableName: 'users',//Explicit table name control 
//   timestamps: true,
// });

// module.exports = User
