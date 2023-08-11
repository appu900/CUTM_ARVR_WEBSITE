require('dotenv').config();
const express = require("express");
const userRouter = require("./Routes/UserRoutes");
const { default: mongoose } = require("mongoose");
const cors = require('cors');
const cookieParser = require('cookie-parser')

//* block for database connection
// * this code is for local database to be hosted on server tier-2.
// * cloud password jarvis7735




connectDataBase().catch((error) => console.log(error));
async function connectDataBase() {
  await mongoose.connect("mongodb+srv://appudq670:jarvis7735@cluster0.phvznk8.mongodb.net/?retryWrites=true&w=majority");
  console.log("database connected");
}
 


const app = express();
app.use(cookieParser())
app.use(cors());
app.use(express.json())
app.use(userRouter);
 


app.listen(5000,()=>{
    console.log("sserver is live");
})






// jarvis7735 mongo cloud password
