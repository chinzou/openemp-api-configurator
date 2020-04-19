const express = require('express')
const logger = require('morgan')
const properties = require('../utils/properties')
const walkRouter = require('../routes/walker')
const app = express()

app.use(logger(properties.debug))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', walkRouter)

module.exports = app;