const mongoose= require('mongoose')
 const Emp=mongoose.Schema({
     name:
     {
         type: String,
         required :true
     },
     salary:
     {
         type: Number,
         required: true
     },
     age:
     {
         type: Number,
         required:true
     }
 })
 module.exports=mongoose.model('EmployeeSchema',Emp)