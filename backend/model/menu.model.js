const mongoose= require("mongoose");

const menuSchema= mongoose.Schema({
    category:{
        type:String,
        required: true
    },
    image:{
        type:String,
        required: true
    },
    dishName:{
        type:String,
        required: true
    },
    details:{
        type:String,
        required: true
    },
    rating:{
        type: String,
        required: true
    },
    prices:{
        halfPortion:{
            type: Number,
            required: true
        },
        fullPortion:{
            type: Number,
            required: true
        }
    }
});


const MenuModel = mongoose.model("Menu", menuSchema);


module.exports={
    MenuModel
}