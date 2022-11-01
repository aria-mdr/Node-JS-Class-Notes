// const Joi = require('joi');
const mongoose = require('mongoose');



const User = mongoose.model('User', new mongoose.Schema({
email: {
 //   //String,Number, Date, Buffer
     type: String,
     required: [true, 'email is required'],
     unique: [true, 'this email already exists'],
     match: [/^\S+@\S+$/g, 'invalid email format'],
     min: 4,
     max: 255
 },
   
 password:{
   type:String,
   required: [true,'password is required'],
   min:5,
   max: 255
 },

 addedOnDate: {
   type: Date,
   default: Date.now()
 },
 isAdmin:{
   type:Boolean,
   default:false

 }
})); 


  // later
  validateUser = (usr) => {
    console.log('inside validation ')
   //validation
  }
  
module.exports = {
 User,
// validateUser
}
