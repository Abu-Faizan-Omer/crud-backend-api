
//////    API     ///////////////////
// app.js
require('dotenv').config()
const express = require('express')
const app = express()



const sequelize = require('./utils/database')
const userRoutes = require('./routes/user')

const port = process.env.PORT || 4000

// JSON body parser
app.use(express.json())

// Example middleware
app.use('/users', (req, res, next) => {
  console.log('mi middleware')
  next()
});

app.use('/', (req, res, next) => {
  console.log('common')
  next()
});

// Routes
app.use('/', userRoutes)


sequelize
  .sync() 
  .then(() => {
    console.log('Database synced')
    app.listen(port, () => {
      console.log(`Server running on ${port}`)
    });
  })
  .catch((err) => {
    console.error('Error syncing database:', err)
  });
