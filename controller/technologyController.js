const fs = require("fs");
const {Technology} = require("./../Model/model");
// const Technology = JSON.parse(
//     fs.readFileSync(`${__dirname}/../JsonData/Technology.json`,"utf-8")
// );

exports.getTechnologyData = async(req,res)=>{
    
    const technology = await Technology.find(); 
    res.status(200).json({
        Technology : technology
    });
}