const fs = require("fs");
const {Food} = require("./../Model/model");

// const Food = JSON.parse(
//     fs.readFileSync(`${__dirname}/../JsonData/Food.json`,"utf-8")
// );

exports.getFoodData = async(req,res)=>{
    const food = await Food.find(); 
    res.status(200).json({
        Food : food
    });
}