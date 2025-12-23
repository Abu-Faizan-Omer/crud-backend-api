// // require('dotenv').config();
// // let express=require("express")
// // let app=express()
// // const bcrypt=require("bcrypt")
// // const sequelize=require("./utils/database")
// // let port=4000

// // // body parser for JSON
// // app.use(express.json());

// // app.use("/users",(req,res,next)=>{
// //     console.log("mi middlware")
// //     next()
// // })

// // app.use("/",(req,res,next)=>{
// //     console.log("common")
// //     next()
// // })

// // //routes
// // const userRoutes=require("./routes/user")


// // app.use("/first",userRoutes)

// // app.use("/",userRoutes)


// // app.listen(port,()=>{
// //     console.log(`server is runnig on 3000`)
// // })

// // // let users=[
// // //     {id:1,name:"faizan"},
// // //     {id:2,name:"umar"}
// // // ]

// // // app.get("/",(req,res)=>{
// // //     let name=req.query.name
// // //     let age=req.query.age
// // //     res.send(`hi this is first req ${name} and ${age} `)
// // // })


// // // app.get("/users",(req,res)=>{
// // //     res.json(users)
// // // })
// // // app.get("/users/api",(req,res)=>{
// // //     const html=`${users.map((item)=>{item.name}).join("")}`
// // //     res.send(html)
// // // })
// // // app.get("/users/:id",(req,res)=>{
// // //     let id=Number(req.params.id)
// // //     const user=users.find((user)=>user.id===id)
// // //     res.json(user)
// // // })



// //////  sql  API     ///////////////////////////////////////////////////////////////////
// // app.js
// require('dotenv').config()
// const express = require('express')
// const app = express()



// const sequelize = require('./utils/database')
// const userRoutes = require('./routes/user')

// const port = process.env.PORT || 4000

// // JSON body parser
// app.use(express.json())

// // Example middleware
// app.use('/users', (req, res, next) => {
//   console.log('mi middleware')
//   next()
// });

// app.use('/', (req, res, next) => {
//   console.log('common')
//   next()
// });

// // Routes
// app.use('/', userRoutes)


// sequelize
//   .sync() 
//   .then(() => {
//     console.log('Database synced')
//     app.listen(port, () => {
//       console.log(`Server running on ${port}`)
//     });
//   })
//   .catch((err) => {
//     console.error('Error syncing database:', err)
//   });

/////////////////////////////////////////////////////////////////////////////////////////



//mongodb with mongocompass

// app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/databasemongo');
const userRoutes = require('./routes/usermongo');

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Debug middleware
app.use((req, res, next) => {
  console.log(`📍 ${req.method} ${req.path}`);
  next();
});

// Mount routes
app.use('/', userRoutes)
app.use('/', require('./routes/expense'));



// Start server after MongoDB connect
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
});


//all usermongo,expense is working only with mongocompass