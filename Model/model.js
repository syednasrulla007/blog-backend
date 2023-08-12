const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    Title:String,
    Link: String,
    Discription: String,
    Production_comp: String,
    Distributor: String,
    WorldWideGross: String
});

const Bollywood = mongoose.model("Bollywood",schema);
const Fitness = mongoose.model("Fitness",schema);
const Food = mongoose.model("Food",schema);
const Hollywood = mongoose.model("Hollywood",schema);
const Technology = mongoose.model("Technology",schema);

module.exports = {Bollywood,Fitness,Food,Hollywood,Technology}