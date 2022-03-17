var express = require('express')
var router = express.Router()

router.get('/get', (req,res) =>{
res.send('Get 메서드로 전송');
})
router.post('/', (req,res) =>{
res.send({'Method':'Post 메서드로 전송','title' :'타이틀key의 해당하는 값'});
})

module.exports = router;