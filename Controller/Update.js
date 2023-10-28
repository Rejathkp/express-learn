const User = require("../Userschema")

const Update=async(req,res) => {
    const {Name,Email,Password} = req.body
    const _id = req.params.id
    const User1 = await User.findByIdAndUpdate(_id,{Name,Email,Password})
    res.json(User1)
}

module.exports = Update