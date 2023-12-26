const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
  res.render('event/index')
})


module.exports=router