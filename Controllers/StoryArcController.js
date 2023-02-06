const express = require("express");
const arcs = express.Router();

const { 
    getAllArcsData, 
    getSubArc 
} = require("../queries/storyArcInfo")

// Index
arcs.get("/", async (req, res) => {
    const allArcData = await getAllArcsData();
    if(allArcData){
        res.status(200).json(allArcData)
    } else {
        res.status(500).json({ error: "server error" }) // Error page. Look at app.js line 24
    }
});

// Show 
arcs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const subArc = await getSubArc(id);
    if(subArc.id){
        res.json(subArc)
    } else {
        res.status(404).json({ error: "Arc Id not found" })  // Error page. Look at app.js line 24
    }
});


module.exports = arcs;