const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const http = require('http')
const mongoose = require('mongoose')

const routes = require('./src/routes')

const app = express()


mongoose.connect("mongodb+srv://ViniciusFL:Vinicius06@cluster0.wlip5.mongodb.net/?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
},
    function (err) {
        if (err) {
            console.log(err)
        }
        else {
            console.log("Banco conectado ao Back")
        }

    })


app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(routes)

app.listen(5028, function () {
    console.log("Servidor ligado")
})