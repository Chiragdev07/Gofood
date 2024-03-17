const express=require('express');
const app=express();
const PORT=3000;
const mongodb=require('./db');

mongodb();
app.get('/',(req,res)=>{
    res.send("Helllo Worls...");
})

app.listen(PORT,()=>{
    console.log(`The App Is Running no Port:${PORT}`);
})