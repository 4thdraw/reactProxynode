var express = require('express')
var router = express.Router()

// router.get('/', (req,res) =>{
// res.send('Get 메서드로 전송');
// })
router.post('/', (req,res) =>{
res.send({'Method':'Post 메서드로 전송'});
})

module.exports = router;