const { default: mongoose } = require("mongoose");
const PrimaryConnection=require("../config/Primary")

const connection=PrimaryConnection();

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const userModel=connection.model("userDetails",userSchema);

module.exports=userModel;