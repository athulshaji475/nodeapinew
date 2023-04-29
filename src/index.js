const cores = require('cores')
const cors=require('cors')
const express=require('express')
const app=express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.get('/',(req,res)=>{
    res.send("Data From Api")
})

const port=process.env.PORT||8000
app.listen(port,()=>{
    console.log(`Server running on port${port}`)
})



