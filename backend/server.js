const express =require('express')
const  app=express()
const mongoose=require("mongoose")

const mongoUrl="mongodb://localhost:27017/login-logic"

mongoose.connect(mongoUrl)
.then(()=>console.log('connected'))
.catch((err)=>console.log(err+" erreur"))

app.listen(3200,()=>console.log('connected on 3200...'))