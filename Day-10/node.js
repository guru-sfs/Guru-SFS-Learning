const express=require('express')
const app=express()

app.get('/',(req,res)=>{
  res.send("Hello world")
});

app.listen(3000,() => {
  console.log("Listening on 127.0.0.1:3000");
});