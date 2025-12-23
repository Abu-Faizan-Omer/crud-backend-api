require('dotenv').config();
let express=require("express")
let app=express()
const bcrypt=require("bcrypt")
const sequelize=require("./utils/database")
let port=4000

// body parser for JSON
app.use(express.json());

app.use("/users",(req,res,next)=>{
    console.log("mi middlware")
    next()
})

app.use("/",(req,res,next)=>{
    console.log("common")
    next()
})

//routes
const userRoutes=require("./routes/user")


app.use("/first",userRoutes)

app.use("/",userRoutes)


app.listen(port,()=>{
    console.log(`server is runnig on 3000`)
})

// let users=[
//     {id:1,name:"faizan"},
//     {id:2,name:"umar"}
// ]

// app.get("/",(req,res)=>{
//     let name=req.query.name
//     let age=req.query.age
//     res.send(`hi this is first req ${name} and ${age} `)
// })


// app.get("/users",(req,res)=>{
//     res.json(users)
// })
// app.get("/users/api",(req,res)=>{
//     const html=`${users.map((item)=>{item.name}).join("")}`
//     res.send(html)
// })
// app.get("/users/:id",(req,res)=>{
//     let id=Number(req.params.id)
//     const user=users.find((user)=>user.id===id)
//     res.json(user)
// })
//////    API     ///////////////////
// app.js
