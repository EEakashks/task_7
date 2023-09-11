const User = require("../models/userModel")

exports.userRegister = async(req,res)=>{
    try {
        const user = await User.create(req.body);

        if(user){
            res.status(201).json({
                message:"user registration successfull",
                user
            })
        }
    } catch (error) {
        res.status(401).json({
            message:error.message
        })
    }
};