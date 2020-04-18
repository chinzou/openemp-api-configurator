const express = require('express')
const logger = require('morgan')
const properties = require('../utils/properties')
const walkRouter = require('../services/walker')
const app = express()

app.use(logger(properties.debug))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', walkRouter)
// app.use((req, res) => {
//     if (res.status.toString() !== 200)
//         res.status(404).send('resource not available')
// })


module.exports = app;