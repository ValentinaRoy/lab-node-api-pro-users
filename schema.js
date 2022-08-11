const mongoose = require('mongoose')
var DBSchema = new mongoose.Schema(
    {
        name:{type:String, lowercase:true},
        email:{type:String, unique:true},
        age:{type:Number},
        prograd_id:{type:Number},
        squad:{type:Number}
    },
    {collection:"dataList"}
)
module.exports = mongoose.model('userModel',DBSchema)