const mongoose = require('mongoose')

const  schema =  new mongoose.Schema({
    count:{type:Number},
    money:{type:Number},
    username:{type:String},
    state:{type:Number},
    items:[{type:Object}],
    paystate:{type:Number},
})

module.exports = mongoose.model('Order',schema)