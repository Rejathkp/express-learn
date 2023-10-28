const { default: mongoose } = require("mongoose");

const Userschema= mongoose.Schema({
    Name: {type:String},
    Email: {type:String},
    Password: {type:String}
});

const User = mongoose.model("User",Userschema)

module.exports = User