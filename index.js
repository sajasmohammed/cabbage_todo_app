const express=require('express');

const app=express();

const Port=process.env.Port || 3000;

app.get('/', (req, res)=>{
    res.send("Welcome")
})

app.listen(Port, ()=>{
    console.log("App is started");
})