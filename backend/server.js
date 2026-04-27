const express =require('express')
const  app=express()
const {hash}=require('bcrypt')
const Info=require('./Info.model')
const mongoose=require("mongoose")
const cors = require('cors');
app.use(cors())
app.use(express.json())
const mongoUrl="mongodb://localhost:27017/login-logic"
app.post('/register/info', async (req, res) => {
    try {
        const {email,password}=req.body;
        const user=await Info.find(user=>user.email=email)
        if(user) return res.status(500).json({messge:"user already exist"})
        const hashpassword= await hash(password,10)
        const info = await Info.create({
            email,
            password:hashpassword
        });
        
        res.status(200).json(info); 
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

mongoose.connect(mongoUrl)
.then(()=>{
    console.log('connected')
   app.listen(3200,()=>console.log('connected on 3200...'))
})
.catch((err)=>console.log(err+" erreur"))

