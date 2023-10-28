const Userss = require("../Userschema2");

const Createuser = async(req,res) => {
    const {Name,Email,Password} = req.body;
    const Userdetails = await Userss.create({
        Name,Email,Password
    })
    res.json(Userdetails)
} 

const getitems=async (req,res) => {
    const _id=req.params.id
    const Userid=await Userss.findById(_id)
    res.json(Userid)
}

const Update=async(req,res) => {
    const {Name,Email,Password} = req.body
    const _id = req.params.id
    const User1 = await Userss.findByIdAndUpdate(_id,{Name,Email,Password})
    res.json(User1)
}

const Delete = async(req,res) => {
    const {Name,Email,Password} = req.body
    const _id = req.params.id
    const user = await Userss.findByIdAndRemove(_id)
    res.json(user)
}

module.exports = {Createuser,getitems,Update,Delete}