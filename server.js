
var express = require('express')
var app = express();
var time = new Date();

var introreact = require('./routers/preinterview')
var postsend = require('./routers/postsend')





app.get('/', (req,res) =>{
    res.send('요청알림/////////////////')
})

app.use('/reactProxy', introreact)
app.use('/post', postsend)

app.listen('8080', ()=>{
    console.log(time+'서버구동');
})