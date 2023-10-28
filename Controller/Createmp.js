const employee = require("../Employee")

const Createmp = async(req,res) => {
    const {FirstName,LastName,DOB,Experience,Position} = req.body
    const Empdetails = await employee.create({
        FirstName,LastName,DOB,Experience,Position
    })
    res.json(Empdetails)
}

module.exports = Createmp