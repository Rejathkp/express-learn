const express = require("express");
const cors = require("cors")
const router = require("./Router/Testing");
const connection = require("./Config/Mongo");
const dotenv = require("dotenv")
connection();

const app = express();

app.use(express.json())
app.use(cors())
app.use("/",router)

dotenv.config()

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`SERVER RUNNING ON ${PORT}`));