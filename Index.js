
const express=require('express')
const mongoose=require('mongoose')
const app=express()
app.use(express.json());
const temroutes=require('/root1/data1.js')
app.use('/data1',temroutes)
const temm=require('/root1/entity Intiliaze.js')
app.use('/entity Intiliaze',temm)
app.listen(3000,
()=>
{
    console.log('Server Started at ${3000}')
}
)
