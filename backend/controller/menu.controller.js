const { MenuModel } = require("../model/menu.model")


const menuItems= async(req, res)=>{
    try {
      let menuList;
      if(req.query.category){
        menuList= await MenuModel.find({category: req.query.category});
      }
      else{
        menuList= await MenuModel.find();
      }
        res.status(200).send({menuList:menuList})
    } catch (error) {
        res.status(400).json({error:`Error in Menu_Route ${error.message}`})
    }
}


module.exports={
    menuItems
}