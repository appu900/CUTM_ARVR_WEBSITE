const User = require("../Modals/UserModals");
const bcryptjs = require("bcryptjs");


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


exports.signin = async(request,response) =>{
    
}


