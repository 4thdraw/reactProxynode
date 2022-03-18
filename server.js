
var express = require('express')
var app = express();
var time = new Date();

var introreact = require('./routers/preinterview')






app.get('/', (req,res) =>{
    res.send('요청알림/////////////////')
})

app.use('/reactProxy', introreact)


app.listen('8080', ()=>{
    console.log(time+'서버구동');
})