const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('clientes ok');
});

module.exports = router;
