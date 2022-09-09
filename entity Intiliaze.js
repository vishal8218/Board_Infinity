const mongoose=require('mongoose')
const entityintiliaze=new mongoose.Schema({
    task_name:{
      type:String,
      required: true
    },
    task_description:{
        type:String
    },
    creator:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true

    },
    createdAt:{
      type:String,
      required:true

    },


})
module.exports=mongoose.model('Entity',entityintiliaze)