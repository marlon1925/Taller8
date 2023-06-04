const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req,res)=>{
    res.send("Hola mundo!")
})

app.post("/welcome", (req,res)=>{
    const {username} = req.body;
    res.status(200).send(`Hola, ${username}`)
})

app.listen(PORT,()=>{
    console.log("Server OK")
})