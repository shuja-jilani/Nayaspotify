const express = require('express') 

const router = express.Router();

const artists = require('./Artists')

router.get('/',(req,res)=>{
    res.json({
        message: 'Welcome to API',
    })
})

router.use('/Artists',artists);

module.exports = router;