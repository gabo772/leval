const express = require('express')
const app=express()
const path = require('path')
const port = 3000

app.use(express.static(path.join(__dirname,'../public')))

app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'./../public/views'))


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

app.get("/quienes-somos",(req,res)=>{

})

app.listen(port,()=>{
    console.log(`Server escuchando en http://localhost:${port}`);
})