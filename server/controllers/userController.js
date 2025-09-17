const userServices=require("../services/userService")

 const handleLogin=async(req,res)=>{
    try{
        const data=await userServices.login(req.body);
        res.send({data:data});
    }catch(err){
        console.log(err);
    }
}

const handleSignup=async(req,res)=>{
    try{
       const data=await userServices.signup(req.body);
       return res.send({data:data});
    }catch(err){
        console.log(err);
    }
}

module.exports={handleLogin,handleSignup}