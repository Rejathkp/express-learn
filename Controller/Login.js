const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../Userschema")

const Login = async(req,res) => {
    const {Email,Password} = req.body;
    const Useremail = await User.findOne({Email});
    if(Useremail && (await bcrypt.compare(Password,Useremail.Password))) {
        res.json({message:"Login Successful", Token: tokengenerate(Useremail._id)});
    }
    else
    {
        res.json("Login failed")
    }
}
const tokengenerate = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn : "1d"
    })
}

module.exports = Login