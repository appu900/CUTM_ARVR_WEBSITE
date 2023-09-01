
const asyncHandler = require('express-async-handler');
const jwt = require("jsonwebtoken");


const authorization = (request,response,next) =>{
    try {

        const token = request.cookies.token
        console.log(token)
        if(!token){
            response.status(403);
            throw new Error("not authirized")
        }

        jwt.verify(token,process.env.ACCESS_TOKEN_SECRETE,(err,decodedData)=>{
            if(err){
                response.status(400);
                throw new Error("invalid token data")
            }

            console.log(decodedData)
            request.data = decodedData.name
            next();
        })


        

        
    } catch (error) {
        response.status(400).json({error:error.message})
    }
}

module.exports = authorization;