const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb://localhost/employeeDb"

const index =  express()

mongoose.connect(url,{useNewUrlParser:true})

//mongoose.Promise = global.Promise;

try
{
const con = mongoose.connection
con.on;
//('open',done=>{
  //  console.log("Connected....")
//});
}catch(err)
{
    console.log(err);
}
index.use(express.json())

const rest=require('./Router/application')
index.use('/application',rest)

module.exports=index;