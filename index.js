const port = process.env.WEBAPI_PORT || 4000
const initMongoDB = require('./index-mongodb')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()


app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())

const productsContoller = require('./controllers/productsController')
app.use('/api/products', productsContoller)

app.listen(port, ()=> console.log(`WebApi is running on http://localhost:${port}`))