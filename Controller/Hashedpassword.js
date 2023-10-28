const Userss = require("../Userschema2");
const bcrypt = require("bcrypt");

const Createusers = async (req, res) => {
  const { Name, Email, Password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(Password, salt);
  const Userdetails = await Userss.create({
    Name,
    Email,
    Password: hashedpassword,
  });
  res.json(Userdetails);
};
module.exports = Createusers;
