const fs = require("fs");
const {Bollywood, Fitness,Food,Hollywood,Technology} = require("./../Model/model");

// const { path } = require("../app");

// const Bollywood = JSON.parse(
//     fs.readFileSync(`${__dirname}/../JsonData/Bollywood.json`,"utf-8")
//     );
// const Hollywood = JSON.parse(
//     fs.readFileSync(`${__dirname}/../JsonData/Hollywood.json`,"utf-8")
//     );
// const Fitness = JSON.parse(
//     fs.readFileSync(`${__dirname}/../JsonData/Fitness.json`,"utf-8")
//     );
// const Food = JSON.parse(
//     fs.readFileSync(`${__dirname}/../JsonData/Food.json`,"utf-8")
//     );
// const Technology = JSON.parse(
//     fs.readFileSync(`${__dirname}/../JsonData/Technology.json`,"utf-8")
//     );
// console.log(Bollywood);


exports.getHomeData = async(req,res)=>{
    
    const bollywood = await Bollywood.find(); 
    const fitness = await Fitness.find(); 
    const food = await Food.find(); 
    const hollywood = await Hollywood.find(); 
    const technology = await Technology.find(); 
    
    res.status(200).json({
        Bollywood : bollywood,
        Fitness: fitness,
        Food: food,
        Hollywood : hollywood,
        Technology : technology
    });
}
