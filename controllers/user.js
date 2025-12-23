// const usermodel=require("../models/usermodel")

// exports.get=(req,res)=>{
//     console.log("this is controlers")
//     res.json(usermodel)
// }
// exports.home=(req,res)=>{
//         let name=req.query.name
//     let age=req.query.age
//     res.send(`new page hai ${name} and ${age} `)
   
// }
// exports.getbyid=(req,res)=>{
//     console.log("inside params controllers")
//     let id=Number(req.params.id)
//     const data=usermodel.find((item)=>item.id===id)
//     res.send(data)
// }
// // ✅ CREATE - POST /users
// exports.create = (req, res) => {
//   const { name } = req.body;

//   if (!name) {
//     return res.status(400).json({ message: "Name is required" });
//   }

//   const newUser = {
//     id: usermodel.length ? usermodel[usermodel.length - 1].id + 1 : 1,
//     name,
//   };

//   usermodel.push(newUser);
//   res.status(201).json(newUser);
// };

// // ✅ FULL UPDATE - PUT /users/:id
// exports.update = (req, res) => {
//   const id = Number(req.params.id);
//   const { name } = req.body;

//   const index = usermodel.findIndex((u) => u.id === id);
//   if (index === -1) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   // PUT = full replace (yaha simple example me sirf name)
//   usermodel[index] = { id, name };

//   res.json(usermodel[index]);
// };

// // ✅ PARTIAL UPDATE - PATCH /users/:id
// exports.patch = (req, res) => {
//   const id = Number(req.params.id);
//   const { name } = req.body;

//   const user = usermodel.find((u) => u.id === id);
//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   if (name !== undefined) {
//     user.name = name; // sirf jo field aayi hai wahi change
//   }

//   res.json(user);
// };

// // ✅ DELETE - DELETE /users/:id
// exports.remove = (req, res) => {
//   const id = Number(req.params.id);
//   const index = usermodel.findIndex((u) => u.id === id);

//   if (index === -1) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   const deleted = usermodel.splice(index, 1); // array se hata diya

//   res.json({ message: "User deleted", deleted: deleted[0] });
// };

// //CREATE (POST)

// // POST http://localhost:4000/users

// // Body → JSON:

// // json
// // { "name": "newUser" }
// // UPDATE FULL (PUT)

// // PUT http://localhost:4000/users/1

// // Body:

// // json
// // { "name": "updatedName" }
// // UPDATE PARTIAL (PATCH)

// // PATCH http://localhost:4000/users/1

// // Body:

// // json
// // { "name": "patchedName" }
// // DELETE

// // DELETE http://localhost:4000/users/1

/////////////////////////////////////////////////////////////////////////////////////////////

