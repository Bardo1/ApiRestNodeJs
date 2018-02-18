'use strict'

const express    = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const app        = express()
const port       = process.env.PORT || 3001

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
	console.log('Esto deberia ser el request')
	console.log(req.body)
	console.log('Esto deberia ser el response')
	console.log(res)
	res.send(200,{ mensaje: 'El producto se ha recibido!'})
})

app.put('/api/product/:productId', (req, res) => {
   
})

app.delete('/api/product/:productId', (req, res) => {
   
})

// app.use(bodyParser.urlencoded({ extended: false}))
// app.use(bodyParser.json())

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

