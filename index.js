const express = require('express')
const app = express()
const port = 8080
const user = [{
    id: 1, 
    name: "kiran"
},
{
    id:2,
    name:"bhum"
}]

app.get('/',(req,res)=>{
    res.send('Hello world!')
})

app.get('/users',(req,res)=>{
    res.send(user)
})

app.listen(port,()=>{
    console.log(`server is runnning at ${port}`)
})
