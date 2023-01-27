const express = require("express");
const pirateGroups = express.Router();

const { 
    getAllPirateGroupData, 
    getPirateGroup,
} = require("../queries/pirateGroups")

// Index
pirateGroups.get("/", async (req, res) => {
    const allPirateGroupData = await getAllPirateGroupData();
    if(allPirateGroupData){
        res.status(200).json(allPirateGroupData)
    } else {
        res.status(500).json({ error: "server error" }) // Error page. Look at app.js line 24
    }
});

// Show
pirateGroups.get("/:id", async (req, res) => {
    const { id } = req.params;
    const pirateGroupData = await getPirateGroup(id);
    if(pirateGroupData){
        res.status(200).json(pirateGroupData)
    } else {
        res.status(500).json({ error: "server error" }) // Error page. Look at app.js line 24
    }
});




module.exports = pirateGroups;