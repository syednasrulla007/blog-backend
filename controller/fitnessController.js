const fs = require("fs");
const {Fitness} = require("./../Model/model");

// const Fitness = JSON.parse(
//     fs.readFileSync(`${__dirname}/../JsonData/Fitness.json`,"utf-8")
// );

exports.getFitnessData = async(req,res)=>{
    const fitness = await Fitness.find(); 
    res.status(200).json({
        Fitness : fitness
    });
}