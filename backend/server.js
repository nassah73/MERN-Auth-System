const express =require('express')
const  app=express()
const Info=require('./Info.model')
const mongoose=require("mongoose")
const cors = require('cors');
app.use(cors())
app.use(express.json())
const mongoUrl="mongodb://localhost:27017/login-logic"
app.post('/login/info', async (req, res) => {
    try {
        const info = await Info.create(req.body);
        res.status(200).json(info); 
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

mongoose.connect(mongoUrl)
.then(()=>console.log('connected'))
.catch((err)=>console.log(err+" erreur"))

app.listen(3200,()=>console.log('connected on 3200...'))