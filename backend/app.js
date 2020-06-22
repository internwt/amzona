import express from 'express';
import data from './data'
import cors from 'cors'
 const app = express()
app.use(cors())
 app.get('/products/items',(req,res)=>{
     res.send(data)
 })
 
app.listen(3001,()=>console.log(`server startd`))