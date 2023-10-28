const jwt = require('jsonwebtoken')
const Userss = require('../Userschema2')

const Createuser2 = async(req,res) => {
    const {Name,Email,Password} = req.body;
    const Userdata = await Userss.findOne({Email,Password})

    if(Userdata){
        res.json("User already exist")
    }

    else{
        const Userdetails = await Userss.create({
            Name,
            Email,
            Password
          });
        res.json({
            Id:Userdetails._id,
            Name:Userdetails.Name,
            Email:Userdetails.Email,
            Password:Userdetails.Password,
            Token:tokengenerate(Userdetails._id)
        });
    }
}
const tokengenerate=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:"1d"
    })
}

module.exports=Createuser2