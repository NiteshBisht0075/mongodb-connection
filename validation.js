const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
name : {
    type:String,
    required:true,
    minlength:2,
    maxlength:20
}, 
email: {
    type:String,
    required:true,
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error("invalid error");
        }
    }
}
})

// we will create a new collection
const User = new mongoose.model('users', userSchema);
module.exports = User;