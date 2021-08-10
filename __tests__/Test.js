const employee =require("../Schema/EmployeeSchema");
const request= require("supertest");
const mongoose= require("mongoose")
const routing=require("../router/application");
const app=require('../app')

const newEmployee =
{
    name:"Thomas",
    age:"34",
    salary:"35000"
};

describe("Testing!!",()=>{
    afterAll(()=>{
        mongoose.connection.close()
    })
    
    it("Post RequestTesting",async ()=>{
        const response = await request(app).post("/application").send(newEmployee);
   
        expect(response.statusCode).toBe(200);

}); 
   it("Get Requesting",async ()=>{
const response=await request(app).get("/application");
expect(response.statusCode).toEqual(200);
//expect(response.body.length).toBe(11);
expect(response.body[0]).toHaveProperty("name")

   });
    
   it("Get with id Requesting",async ()=>{

    const response=await request(app).get("/application/6103d7d48786a13838397214");

    expect(response.statusCode).toBe(200);

   });
it("Delete requesting",async()=>{

    const response=await request(app).delete("/application/611275f9fe3865340ccdd97e");

    expect(response.statusCode).toBe(200);

})
it("Patch requesting",async()=>{

    const response=await request(app).patch("/application/610d321a75e6802468e39287").send({
        "salary":"50000"
    })
    expect(response.statusCode).toBe(200);
});


});
