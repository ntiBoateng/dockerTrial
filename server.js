const express = require('express')
const app = express()

const port = 3400

app.get('/',(req,res)=>{
    res.status(200)
    res.send("Welcome to the world of Aladdin magician/ letd mske the world great again and enjoy the best out of it")
})

app.listen(port,()=>{
    console.log("Server on Port")
})