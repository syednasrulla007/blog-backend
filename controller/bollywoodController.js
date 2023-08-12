const fs = require("fs");
const {Bollywood} = require("./../Model/model");


// const Bollywood = JSON.parse(
//     fs.readFileSync(`${__dirname}/../JsonData/Bollywood.json`,"utf-8")
// );



exports.getBollywoodData = async(req,res)=>{
    
    const bollywood = await Bollywood.find(); 
    res.status(200).json({
        Bollywood : bollywood
    });
}