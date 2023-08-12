const fs = require("fs");
const {Hollywood} = require("./../Model/model");



exports.getHollywoodData = async(req,res)=>{
    
    const hjollywood = await Hollywood.find(); 
    res.status(200).json({
        Hollywood : hollywood
    });
}