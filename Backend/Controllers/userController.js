
const User = require("../Modals/UserModals");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken")
const cookieParser = require('cookie-parser')



//public route

exports.registerUser = async (request, response) => {
  try {

    const{username,email,phoneNumber,password} = request.body;
    console.log(request.body);

    //validate request data

    if(!username || !email || !phoneNumber || !password){
       response.status(400);
       throw new Error("please filled all field")
       
    }

    //check for user already exist or not

    const userExist = await User.findOne({email});
    if(userExist) return response.status(400).json({message:"useralready exists"})

    //create hashed password 

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password,salt);
    console.log(hashedPassword);

    //creating new userdata 

    const newuser = new User({
      username,
      email,
      phoneNumber,
      password:hashedPassword,
    });

    //saving user into database

    const savedUser = await newuser.save();
    return response.status(201).json({
      message:"registration sucessfull",
      savedUser,
    });
    
    
  } catch (error) {

    response.status(400).json({message:error.message})
    
  }
};


//public route

exports.login = async(request,response) =>{
  try {

    const{email,password} = request.body;
    if(!email || !password){
      response.status(400);
      throw new Error("All fields are required");
    }

    //check user exists in db or not 

    const user = await User.findOne({email});
    if(!user){
      response.status(400)
      throw new Error("user not exsits signup first")
    }

    // check for valid password

    const validPassword = await bcryptjs.compare(password,user.password);
    if(!validPassword){
      response.status(400);
      throw new Error("wrong password")
    }


    const token = jwt.sign({
      id:user._id,
      name:user.username,
      email:user.email,
    },process.env.ACCESS_TOKEN_SECRETE,{expiresIn:'365d'});

    //sendToken in userCookie 

    const options = {
      expires:new Date(Date.now() + 100 * 24 * 60 * 60 * 1000),
      httpOnly:true
    }

    response.status(200).cookie("token",token,options).json({
      success:true,
      token,
      user
    })


    
    
  } catch (error) {

    response.status(400).json({message:error.message})
    
  }

}



exports.getUser = async (request,response) =>{

  try {

    console.log("this is " + request.data)

    const username = request.data;
    response.json({name:username})
    
  } catch (error) {
      response.status(400).json({message:error.message})
  }

}
