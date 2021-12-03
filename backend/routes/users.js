var express = require('express');
var router = express.Router();
const User = require('../models/User')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this is the users page');
});

router.post('/',(req,res) => {
  console.log(req.body);
})

module.exports = router;