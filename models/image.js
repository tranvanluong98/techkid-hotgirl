// Owner - view - like - date - comment - image url - descritption

const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const ImageSchema =  new Schema({
    imageUrl : {type: String , required:true, unique:true},
    owner: {type:Schema.Types.ObjectId , ref:'User', unique:true},
    view: {type:Number, default:0},
    like: {type:Number,default: 0},
    date: {type:Date},
    comments: [{
        user:{type:Schema.Types.ObjectId , ref:'User', unique:true},
        content:{type:String , require:true},
        create_at:{type:Date, default: new Date().toLocaleTimeString()}
    }],
    description: {type:String},
    
})

module.exports = mongoose.model("Image" , ImageSchema)