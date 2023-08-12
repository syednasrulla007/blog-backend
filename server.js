const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({path:"./config.env"})

const DB = process.env.DATABASE.replace("<PASSWORD>",process.env.DATABASE_PASSWORD);
console.log(DB);
mongoose.connect(DB,{
    useNewUrlParser:true
  })
    .then(()=>{
      console.log("Connected to MongoDB");
    })
    .catch((err)=>{
      console.log(err);
      console.log("Couldn't connect to MongoDB");
    })
  
app.listen(process.env.PORT,()=>{
    console.log(`server started at port ${process.env.PORT}`);
});