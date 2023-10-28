const mongoose = require("mongoose")

const connection=async()=>{
    try{
        const connect = await mongoose.connect("mongodb+srv://rejathkp:Rejathkp12@rejath.aalz2ev.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Database is Running");
    }
    catch(err){
        console.log(`error:${err}`);
    }
}
module.exports = connection