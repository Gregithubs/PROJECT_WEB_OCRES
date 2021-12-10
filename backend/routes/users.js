const {authUser,registerUser, updateUserProfile} = require("../controllers/userController.js");
var express = require('express');
var router = express.Router();
const User = require('../models/User')
const protect=require('../middlewares/authMiddleware')


router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").post(function(req,res){
  protect,
  updateUserProfile
})
//Supprime un user
router.delete('/delete', async (req,res) => {
  try{

  const removedUser = await User.remove({username:req.body.username})
  res.json(removedUser)
  }catch(error){
    res.json({message:error})
  }
})
module.exports = router;