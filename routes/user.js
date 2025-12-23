// // const express=require("express")
// // const router=express.Router()
// // const userControllers=require("../controllers/user")

// // router.use((req,res,next)=>{
// //     console.log("route middlesare")
// //     next()
// // })

// // router.get("/users",userControllers.get)
// // router.get("/users/:id",userControllers.getbyid)
// // router.get("/",userControllers.home)

// // // ✅ CREATE
// // router.post("/users", userControllers.create);
// // // ✅ FULL UPDATE
// // router.put("/users/:id", userControllers.update);

// // // ✅ PARTIAL UPDATE
// // router.patch("/users/:id", userControllers.patch);

// // // ✅ DELETE
// // router.delete("/users/:id", userControllers.remove);

// // module.exports=router

// //with database

// // routes/userRoutes.js
// const express = require('express')
// const router = express.Router()
// const userControllers = require('../controllers/user')
// const { authenticate } = require('../middleware/auth')

// // Route-level middleware 
// router.use((req, res, next) => {
//   console.log('route middleware')
//   next()
// })


// router.get('/', userControllers.home)
// router.post('/users', userControllers.create);     // signup
// router.post('/users/login', userControllers.login) // login


// router.get('/users', authenticate, userControllers.getAll)
// router.get('/users/:id', authenticate, userControllers.getById)

// router.put('/users/:id', authenticate, userControllers.update)
// router.patch('/users/:id', authenticate, userControllers.patch)
// router.delete('/users/:id', authenticate, userControllers.remove)

// module.exports = router
