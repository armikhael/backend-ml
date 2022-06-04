import express from 'express'
import path from 'path'

import { Product } from './controllers/product/product.controller'

// Create Express server
const app = express()
var cors = require('cors')

const corsOptions = {
	origin: '*',
	credentials: true,
	optionSuccessStatus: 200,
}

// Express configuration
app.use(cors(corsOptions))
app.set('port', process.env.PORT || 3000)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../public'), { maxAge: 31557600000 }))

Product(app)

export default app
