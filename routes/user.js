const express=require("express")
const router=express.Router()
const userControllers=require("../controllers/user")

router.use((req,res,next)=>{
    console.log("route middlesare")
    next()
})

router.get("/users",userControllers.get)
router.get("/users/:id",userControllers.getbyid)
router.get("/",userControllers.home)

// ✅ CREATE
router.post("/users", userControllers.create);
// ✅ FULL UPDATE
router.put("/users/:id", userControllers.update);

// ✅ PARTIAL UPDATE
router.patch("/users/:id", userControllers.patch);

// ✅ DELETE
router.delete("/users/:id", userControllers.remove);

module.exports=router
