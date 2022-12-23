require('dotenv').config()

const port = process.env.WEBAPI_PORT || 4000
const initMongoDB = require('./index-mongodb')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

//middleware
app.use(cors())
app.use(express.urlencoded({extended: false }))
app.use(bodyParser.json())




//routes

app.use('/api/products', require('./controllers/productsController'))

//initialize
initMongoDB()
app.listen(port, ()=> console.log(`WebApi is running on http://localhost:${port}`))