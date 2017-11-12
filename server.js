var express = require('express')
var app = express()
var mongodb = require('mongodb')
var bodyparser = require('body-parser')
var gdax = require('gdax')

app.use(express.static(__dirname+'/public'))
app.use(bodyparser.json())

const apiURI = 'https://api.gdax.com';
const sandboxURI = 'https://api-public.sandbox.gdax.com';

const authedClient = new gdax.AuthenticatedClient(key, b64secret, passphrase, apiURI);

app.get('/accounts', function(req, res) {
    authedClient.getAccounts(function(error, response, body) {
        if(!error) {
            res.send(response)
        }
    })
    // res.send(authedClient.getAccounts())
})

app.get('/orders', function(req, res) {
    authedClient.getOrders(function(error, response, body) {
        if(!error) {
            res.send(response)
        }
    })
})

app.get('/fills', function(req, res) {
    authedClient.getFills(function(error, response, body) {
        if(!error) {
            res.send(response)
        }
    })
})

app.get('/ticker', function(req, res) {
    authedClient.get
})

app.listen(3000)