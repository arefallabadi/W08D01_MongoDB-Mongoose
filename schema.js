const mongoose = require("mongoose");


const todo = new mongoose.Schema({
    task:{type:String, required:true, unique:true},
    description:{type:String},
    deadline:{type:Date, default:Date.now() , required:true},
    isCompleted:{type:String, required:true},
    priority:{type:String}
})

module.exports = mongoose.model("todo",todo)