const express = require("express")
const Createuser = require("../Controller/Createuser")
const Createmp = require("../Controller/Createmp")
const getitems = require("../Controller/Getdetails")
const Update = require("../Controller/Update")
const Delete = require("../Controller/Delete")
const Usercrud = require("../Controller/Userfull") 
const Createusers = require("../Controller/Hashedpassword")
const Createuser2 = require("../Controller/Tokengeneration")
const protect = require("../Middleware/Token")
const Login = require("../Controller/Login")

const router=express.Router()
const middleware=[protect]

router.route("/signup").post(Createuser)
router.route("/login").post(Login)

// router.route("/emp").post(Createmp)
// router.route("/:id").get(getitems)
// router.route("/:id").put(Update)
// router.route("/:id").delete(Delete)

router.route("/hash").post(Createusers)

//----------------------User crud--------------------------------------//

// router.route("/").post(Usercrud.Createuser)
router.route("/read/:id").get(Usercrud.getitems)
router.route("/update/:id").put(Usercrud.Update)
router.route("/delete/:id").delete(Usercrud.Delete)

router.route("/token").post(Createuser2)

router.route('/').post(Createuser2)
router.route("/jwt").get(middleware,Createuser2)


module.exports=router