var express = require('express');
var router = express.Router();
const User = require('../models/User')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try { 
    const users = await User.find();
    res.json(users);

  }catch{error}{
    res.json({message:error});
  };
});
//Submits a user
router.post('/', async (req,res) => {
  const user = new User({
    name:req.body.name,
    surname:req.body.surname,
    username:req.body.username,
    password:req.body.password,
  });
  try{
    const savedUser = await user.save();
    res.json(savedUser);
  }catch (error) {
    res.json({message:error});
  }
})
//Access a specific user
router.get(`/:userId`, async (req,res) =>{
  try{
 const user =  await User.findById(req.params.userId);
 res.json(post);
  }catch(error){
    res.json({message:error})
  }
})

module.exports = router;