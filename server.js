'use strict'

const express = require("express")
const bodyParser = require("body-parser")
require("./config/db")

var routes = require('./api/routes/todoRoutes')

const app = express()

routes(app)

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})