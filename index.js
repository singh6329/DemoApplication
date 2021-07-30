const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb://localhost/employeeDb"

const index =  express()

mongoose.connect(url,{useNewUrlParser:true})


const con = mongoose.connection

con.on('open',()=>{
    console.log("Connected.....")
})

index.use(express.json())

const rest=require('./Router/application')
index.use('/application',rest)

index.listen(8080,()=>{
    console.log("Server Started.......")
})