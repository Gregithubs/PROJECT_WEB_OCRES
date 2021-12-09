var express = require('express');
var router = express.Router();
const User = require('../models/User')

/* GET users listing. 
router.get('/', async function(req, res, next) {
  try { 
    const users = await User.find();
    res.json(users);

  }catch{error}{
    res.json({message:error});
  };
});
*/
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
 res.json(user);
  }catch(error){
    res.json({message:error})
  }
})

router.get('/', async(req,res) =>{
  try{ const user= await User.find({username:req.body.username,password:req.body.password});
  if (user)
  }
  res.json(user);
}catch(error){
  res.json({message:error})
}
})

//Deletes a user
router.delete('/delete', async (req,res) => {
  try{

  const removedUser = await User.remove({username:req.body.username})
  res.json(removedUser)
  }catch(error){
    res.json({message:error})
  }
})

//Updates a user
router.patch('/:userId', async (req,res) => {
  try{
    const updatedUser = await User.updateOne({_id:req.params.userId},
     {$set:{ name :req.body.name }})
    res.json(updatedUser)
  }catch(error){
    res.json({message:error})
  }
})
module.exports = router;