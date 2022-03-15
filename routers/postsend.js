var express = require('express')
var router = express.Router()

router.post('/', (req,res) =>{
res.send({'title':'Post 메서드로 전송시 좀 더 복잡 axios 모듈필요 json으로 받아지는지...'});
})

module.exports = router;