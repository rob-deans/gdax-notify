var express = require('express')
var app = express()
var mongojs = require('mongojs')
var bodyparser = require('body-parser')

app.use(express.static(__dirname+'/public'))
app.user(bodyparser.json())

app.get('/index.html', function(req, res) {
    res.send(__dirname + '/' + 'index.html')
})

app.listen(3000)