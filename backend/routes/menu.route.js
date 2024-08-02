const express= require("express");
const { menuItems } = require("../controller/menu.controller");
const { MenuModel } = require("../model/menu.model");

const menuRouter= express.Router();

menuRouter.get("/", menuItems)


// menuRouter.post("/add", async(req, res)=>{
//     try {
//         let menu=[
//            
//         ]
//         await MenuModel.insertMany(menu)
        
//         res.send({message:"Menu Added"})
//     } catch (error) {
//         res.status(400).send({error: error.message})
//     }
// })

module.exports={
    menuRouter
}