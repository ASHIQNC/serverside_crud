
const { ObjectId } = require('bson')
const express=require('express')
const router=express.Router()

const Person=require('../models/person')

//getting the data

router.get('/',(req,res)=>{
    Person.find((err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log("error in retrieving the data:"+JSON.stringify(err))
        }
    })
})

//post

router.post('/',(req,res)=>{
    const pers=new Person({
        name:req.body.name,
        place:req.body.place,
        state:req.body.state,
        pin:req.body.pin
    })

    pers.save((err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            console.log("errror recieved while posting a file:"+JSON.stringify(err))
        }
    })
});

//for find data using id

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    //req ellenkil

    res.send(`no record with this id: ${req.params.id}`)

    //request indenkil

    Person.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            console.log("error recieved while finding the file:"+JSON.stringify(err))
        }
    })

})

//UPDATE

router.put('/:id',(req,res)=>{
    const id=req.params.id

    if(!ObjectId.isValid(id))
       return res.send(`no record with this given id: ${req.params.id}`)
    
       const pers={
           name:req.body.name,
           place:req.body.place,   //namukk ulla data thanne update chyumpo ( new person ) enn kodkanda
           state:req.body.state,   //puthya data add chyyunnath aanel new person kodkanm nammal (POST) chythappo use chythapoele
           pin:req.body.pin
       }

    

    Person.findByIdAndUpdate(id,{$set:pers},{new:true},(err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            
            console.log("error recieved while updating the file:"+JSON.stringify(err))
        }
    })

});

//DELETE

router.delete('/:id',(req,res)=>{
   
    if(!ObjectId.isValid(req.params.id))
    return res.send(`no record with this id: ${req.params.id}`)

    Person.findByIdAndDelete(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            console.log("error recieved while deleting the file:"+JSON.stringify(err))
        }
    })
})




module.exports=router