const User = require("../Userschema")

const Delete = async(req,res) => {
    const {Name,Email,Password} = req.body
    const _id = req.params.id
    const user = await User.findByIdAndRemove(_id)
    res.json(user)
}
module.exports = Delete