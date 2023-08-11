

const mongoose = require('mongoose');

async function connectDatabase(){
  try {

    await mongoose.connect('mongodb://127.0.0.1:27017/centurion')
    
  } catch (error) {
     console.log("there is a problem in database connection ",error)
  }
}

module.exports = connectDatabase;

