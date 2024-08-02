const { UserModel } = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config()

const register=async(req, res)=>{
    const {name, email, password}= req.body;
    try {
        if(!name || !email || !password){
           return res.status(422).send({error:"Please fill all the required field"})
        }
        const emailExists = await UserModel.findOne({ email });
        if (emailExists) {
           return res.status(422).send({ error: "Email already exists." });
          }
          const salt= await bcrypt.genSalt(10);
          const hashPass= await bcrypt.hash(password, salt)
            const newUser= new UserModel({
                name,
                email,
                password:hashPass
            })
            await newUser.save()
           return res.send(newUser)
    } catch (error) {
      return  res.status(400).send({error:error.message})
    }
}


const login= async(req, res)=>{
    const {email, password}= req.body;
    try {
        const user= await UserModel.findOne({email});
        if(!user){
            res.status(401).json({error:"User not found"})
        }
        const isMatch= await bcrypt.compare(password, user.password);
        if(!isMatch){
            res.status(401).json({error:"Invalid Credentials"});
        }
        const {_id:id, name}= user;
        const token= jwt.sign({id, name},process.env.SERCET_KEY);
        res.status(200).json({message:"Login Successful", token:token, ID : id, NAME : name})
        
    } catch (error) {
        res.status(401).json({error:`Login error: ${error.message}`})
    }
}

module.exports={
    register,
    login
}
