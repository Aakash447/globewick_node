const express = require('express')
const router  = express.Router()

router.get('/user',(req,res)=>{
    console.log('in user route')
    res.render('User/index')
})

module.exports = router 