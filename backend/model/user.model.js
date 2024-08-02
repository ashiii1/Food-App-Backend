const mongoose= require("mongoose");


const userSchema= mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxlength: 25
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    picture: {
      type: String, 
    },
})

const UserModel= mongoose.model("users", userSchema);

module.exports= {
    UserModel
}