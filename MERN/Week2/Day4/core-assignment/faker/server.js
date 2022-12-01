const { faker } = require('@faker-js/faker');

const express = require("express");
const app = express();
const PORT = 3000 ;

app.get("/api/users/new",(req,res)=>{
 res.send(newUser)
});
app.get("/api/company/new",(req,res)=>{
 res.send(company)
});
app.get("/api/users/company",(req,res)=>{
 res.json({newUser,company})
});
const server =app.listen(PORT, ()=>{console.log(`let's start`);})

class User {
    constructor(){
        this.password=faker.internet.password()
        this.email=faker.internet.email()
        this.phoneNumber=faker.phone.number()
        this.lastName=faker.name.lastName() 
        this.firstName=faker.name.firstName()
        this.id=faker.datatype.number()
    }
}

class Company {
    constructor(){
        this.id=faker.datatype.uuid()
        this.name=faker.company.name()
        this.address={street:faker.address.street(),
            city:faker.address.cityName(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.county()}
    }
}

const newUser= new User()
const company= new Company()
