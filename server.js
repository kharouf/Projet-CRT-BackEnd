
// import express
const express = require('express')
// import data base
const connectDB = require('./config/connectDB.js')
// Initialize the app
const app = express()
const mongoose  =require('mongoose');
mongoose.set('strictQuery', true)
// config dotenv
require('dotenv').config()
connectDB()
// create middelware contact
app.use(express.json())

app.use('/contact' , require('./routes/contact'))

// create middelware user
app.use(express.json())

app.use('/user' , require('./routes/user'))

const PORT = process.env.PORT || 5000

// creaation of the server
app.listen(PORT,(err)=>{err?console.log(err):console.log('Server is running on port'+" "+ PORT)})

