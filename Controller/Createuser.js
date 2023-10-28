//----------------Signup and login , also connects to frontend-------------------//

const User = require("../Userschema");
const bcrypt = require('bcrypt')

const Createuser = async(req,res) => {
    const {Name,Email,Password} = req.body;
    const Userdata = await User.findOne({Email})
    if(Userdata && (await bcrypt.compare(Password , Userdata.Password)))
    {
        res.json("user already exist")
    }
    else{
        const salt = await bcrypt.genSalt(10)
        const hashpassword = await bcrypt.hash(Password,salt)
        const Userdetails = await User.create({
        Name,Email,Password:hashpassword    
    })
    res.json(Userdetails)

    // res.json("failed")
    }
}       
module.exports = Createuser