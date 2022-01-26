const express=require('express')
const bodyparser=require('body-parser')
const cors =require('cors')
const { mongoose }=require('./db')
const personcontroller=require('../project/contoller/personcontroller')


const app=express()
app.use(bodyparser.json())
app.use(cors())
app.use('/persons',personcontroller)    // slash(/) persons adchal namkk enter chytha data kaana



//connection part

const PORT =3000

app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})