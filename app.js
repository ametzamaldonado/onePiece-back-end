const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());

// controllers
const devilFruitData = require("./Controllers/devilFruits/DevilFruitControllers")
const arcsData = require("./Controllers/storyArcs/StoryArcController")
const pirateGroups = require("./Controllers/pirateGroups/PirateGroupsController")
const marinesInfo = require("./Controllers/marine/MarineInfoController")
const characters = require("./Controllers/characters/CharactersControllers")
const sagasData = require('./Controllers/storyArcs/StorySagaController')
const mainArcData = require("./Controllers/storyArcs/StoryMainController")


app.use("/arcs", arcsData)
app.use("/mainArcs", mainArcData)
app.use("/sagas", sagasData)
app.use("/devilFruits", devilFruitData)
app.use("/pirateGroups", pirateGroups)
app.use("/marines", marinesInfo)
app.use("/characters", characters)

app.get("/", (req, res) => {
    res.send("Hello, Welcome to One Piece")
})
  

app.get("*", (req, res) => {
    res.status(404).send("page not found")
})

module.exports = app;

// MIRO BOARD - https://miro.com/app/board/uXjVPd2mS30=/