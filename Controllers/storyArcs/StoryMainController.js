const express = require("express");
const mainArc = express.Router();

const { 
    getMainArc,
    getMainArcId
} = require("../../queries/storyArcInfo")


mainArc.get("/", async (req, res) => {
    const mainArc = await getMainArc();
    console.log(mainArc)
    if(mainArc){
        res.json(mainArc)
    } else {
        res.status(404).json({ error: "mainArcs not found" })  // Error page. Look at app.js line 24
    }
});

mainArc.get("/:id", async (req, res) => {
    const { id } = req.params;
    const mainArc = await getMainArcId(id);
    if(mainArc.id){
        res.json(mainArc)
    } else {
        res.status(404).json({ error: "mainArcs id not found" })  // Error page. Look at app.js line 24
    }
});

module.exports = mainArc;