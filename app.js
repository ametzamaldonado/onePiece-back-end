const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());

// controllers
const devilFruitData = require("./Controllers/DevilFruitControllers")
const arcsData = require("./Controllers/StoryArcController")
const pirateGroups = require("./Controllers/PirateGroupsController")
const marinesInfo = require("./Controllers/MarineInfoController")
const characters = require("./Controllers/CharactersControllers")

app.use("/arcs", arcsData)
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