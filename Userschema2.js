const {  mongoose } = require("mongoose");

const Userschema2= mongoose.Schema({
    Name: {type:String},
    Email: {type:String},
    Password: {type:String}
});

const Userss = mongoose.model("Usercruds",Userschema2)

module.exports = Userss