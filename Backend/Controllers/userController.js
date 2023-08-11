const User = require("../Modals/UserModals");
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');
const Jwt_key = "centurion arvr lab";


exports.signup = async (request, response, next) => {

    try {

        const{username,email,phoneNumber,password} = request.body;
        const checkExistingUser = await User.findOne({email});
        
        if(checkExistingUser){
            return response.status(400).json({message:"user already exists"});
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt);

        const newUser = new User({
            name:username,
            email:email,
            password:hashedPassword,
            phoneNumber:phoneNumber
        })
  
        const savedUser = await newUser.save();
        return response.json({
            message:"registration done",
            savedUser,
        });
        
    } catch (error) {

        return response.status(400).json({message:error.message})
        
    }
  
};


exports.signin = async (request,response,next) =>{

    try {

        const{email,password} = request.body;
        let existingUser = await User.findOne({email});

        if(!existingUser){
            return response.status(400).json({message:"user not found sign up first"});
        }

        const checkValidPassword = await bcryptjs.compare(password,existingUser.password)
        if(!checkValidPassword){
            return response.status(400).json({message:"wrong password"});
        }

        const token = jwt.sign({id:existingUser._id},Jwt_key,{
            expiresIn:"1hr"
        })

        return response.status(200).json({mesaage:"signin done",existingUser,token});
        
    } catch (error) {
        return response.status(400).json({message:error.message})
    }
    
}


