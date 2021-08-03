const mongoose = require('mongoose')

const  schema =  new mongoose.Schema({
    name:{type :String},
    price:{type:Number},
    describe:{type :String},
    icon:{type:String},
    parent:{type:mongoose.SchemaTypes.ObjectId,ref:'Category'},
})

module.exports = mongoose.model('Item',schema)