const mongoose=require('mongoose')

const Person=mongoose.model('person',{
    name:{type:String,required:true},
    place:{type:String},
    state:{type:String},
    pin:{type:Number}
},'person')

module.exports=Person