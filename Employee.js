const { default: mongoose } = require("mongoose");

const Employee = mongoose.Schema({
    FirstName: {type:String},
    LastName: {type:String},
    DOB: {type:String},
    Experience: {type:String},
    Email: {type:String},
    Position: {type:String}
});

const employee = mongoose.model("Employee",Employee)

module.exports = employee