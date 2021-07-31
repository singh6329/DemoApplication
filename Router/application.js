const express =require('express')
const employee = require('../Schema/EmployeeSchema')
const router =express.Router()

router.get('/',async(req,res)=>{
    try{
        const emp1= await employee.find()
        res.json(emp1)
        
        
    }catch(err)
    {
        res.send("Error"+ err)
    }
})

router.get('/:id',async(req,res)=>{
    try{

        const emp1= await employee.findById(req.params.id);
        res.json(emp1)
        
    }catch(err)
    {
        res.send("Error"+ err)
    }
})

router.delete(('/:id'),async (req,res)=>{

    try{
      const del=await employee.findById(req.params.id)
      del.id=req.body.id
      del.remove()
      res.json(del)

    }catch(err)
    {
        res.send("Error while deleting data"+err)
    }
})


router.patch('/:id',async(req,res)=>{
    try{

        const emp1= await employee.findById(req.params.id)
       emp1.salary = req.body.salary
        
        //res.json(emp1)

      const update= emp1.save()
      res.json(emp1)
        
    }catch(err)
    {
        res.send("Error"+ err)
    }
})

router.post('/',async (req,res)=>{
    const emp2=new employee({
        name : req.body.name,
        salary: req.body.salary,
        age: req.body.age
    })
    try{
    const insert=await emp2.save()
    res.json(insert)

    }catch(err)
    {
        res.send("Error while storing data"+err)
    }
})
module.exports = router
