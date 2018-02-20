'use strict'

const express    = require('express')
const productCtrl = require('../controllers/product')
const auth = require('../middlewares/auth')
const api = express.Router()
const userCtrl = require('../controllers/user')

api.get('/product', productCtrl.getProducts )
api.get('/product/:productId', productCtrl.getProduct )
api.post('/product', productCtrl.saveProduct )
api.put('/product/:productId', productCtrl.updateProduct )
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth, (req, res) => {
  res.status(200).send({ message: 'Tienes acceso' })
})


module.exports = api