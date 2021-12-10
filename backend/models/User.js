const mongoose = require('mongoose');
const bcrypt =require("bcryptjs");

const UserSchema=mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    username: {
        type: String,
        required:true
    },
    password: {
        type:String,
        required:true,
    },
    pic:{
        type:String,
        required:true,
        default:
            "https://icon-library.com/images/anonymous-avatar-icon-25.jpg"
    },
}
)
UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  
  // will encrypt password everytime its saved
  UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });


module.exports = mongoose.model('Users',UserSchema);