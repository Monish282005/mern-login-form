const userModel=require("../models/userModel")

const login=async(data)=>{
   try{
      const {email}=data;
      const isExists=await userModel.findOne({email});
      if(isExists){
          if(isExists.password===data.password) 
            return isExists;
        else return "Password mismatch";
    }
      return "User not exists";
   }catch(err){
    console.log(err);
   }
}

const signup=async(data)=>{
    try{
        const userObj=new userModel(data);
        await userObj.save();
        return userObj;
    }catch(err){
        console.log(err);
    }
}

module.exports={login,signup};

