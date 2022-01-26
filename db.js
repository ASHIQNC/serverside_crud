
//connecting mongodb server for that u should turn on the mongodb server


const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/cruddb2",(err)=>{
    if(!err){
        console.log("connection successfull")
    }else{
        console.log("error in db",JSON.stringify(err))
    }
})

module.exports=mongoose