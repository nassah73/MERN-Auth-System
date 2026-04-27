const express =require('express')
const  app=express()
const {hash}=require('bcrypt')
const Infor=require('./Info.model')
const mongoose=require("mongoose")
const cors = require('cors');
app.use(cors())
app.use(express.json())
const mongoUrl="mongodb://localhost:27017/login-logic"
app.post('/register/info', async (req, res) => {
    try {
        const {email,password}=req.body;
        const userExist = await Infor.findOne({ email: email });
        if(user) return res.status(400).json({messge:"user already exist"})
        const hashpassword= await hash(password,10)
        const info = await Infor.create({
            email,
            password:hashpassword
        });
        
        res.status(200).json(info); 
        
    } catch (err) {
        res.status(500).json({ message:"probleme in regirter" });
    }
})

mongoose.connect(mongoUrl)
.then(()=>{
    console.log('connected')
   app.listen(3200,()=>console.log('connected on 3200...'))
})
.catch((err)=>console.log(err+" erreur"))

