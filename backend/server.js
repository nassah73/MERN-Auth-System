const express =require('express')
const  app=express()
const mongoose=require("mongoose")
app.use(express.json())
const mongoUrl="mongodb://localhost:27017/login-logic"
app.post('/login/info',async(req,res)=>{
    const info =await
})

mongoose.connect(mongoUrl)
.then(()=>console.log('connected'))
.catch((err)=>console.log(err+" erreur"))

app.listen(3200,()=>console.log('connected on 3200...'))