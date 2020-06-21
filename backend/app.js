import express from 'express';
import data from './data'
 const app = express()

 app.get('/products/items',(req,res)=>{
     res.send(data)
 })
 
app.listen(3001,()=>console.log(`server startd`))