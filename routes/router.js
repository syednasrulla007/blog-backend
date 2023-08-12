const express = require("express");
const homeController = require("./../controller/homeController");
const hollywoodController = require("./../controller/hollywoodController");
const bollywoodController = require("./../controller/bollywoodController");
const foodController = require("./../controller/foodController");
const fitnessController = require("./../controller/fitnessController");
const technologyController = require("./../controller/technologyController");

const Router = express.Router();

Router.route("/").get(homeController.getHomeData);
Router.route("/bollywood").get(bollywoodController.getBollywoodData);
Router.route("/hollywood").get(hollywoodController.getHollywoodData);
Router.route("/technology").get(technologyController.getTechnologyData);
Router.route("/fitness").get(fitnessController.getFitnessData);
Router.route("/food").get(foodController.getFoodData);


module.exports = Router;