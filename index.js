'use strict'

const express    = require('express')
const bodyParser = require('body-parser')
const mongoose   = require('mongoose')

const Product    = require('./models/product')

const app        = express()
const port       = process.env.PORT || 3001


app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())


app.get('/hola/:name', (req, res) => {
   res.send({ mensaje:`Hola ${req.params.name}!`})
})

app.get('/api/product', (req, res) => 
{
   res.send(200,{product:[]})
})

app.get('/api/product/:productId', (req, res) => 
{
   res.send(200,{product:[]})
})

app.post('/api/product', (req, res) => {
	console.log('Post /api/product')
	console.log(req.body)
	    
	let product         = new Product()
	product.name        = req.body.name
	product.picture     = req.body.picture
	product.price       = req.body.price
	product.category    = req.body.category
	product.description = req.body.description
	
	product.save((err, productStored) => {
    if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `})
    res.status(200).send({ product: productStored })
  })
    

	// res.send(200,{ mensaje: 'El producto se ha recibido!'})
})

app.put('/api/product/:productId', (req, res) => {
   
})

app.delete('/api/product/:productId', (req, res) => {
   
})

mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
    
    // if(err) throw err
    // console.log('Conexion a la base de datos establecida...')
    if(err){
    	return console.log('Error al conectar a la base de datos')
    } 

	app.listen(port, () => {
	   console.log(`API REST corriendo en http://localhost:${port}`)
	})
})

