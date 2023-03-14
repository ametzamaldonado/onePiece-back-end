const express = require("express");
const pirateGroups = express.Router();

const { 
    getAllPirateGroupData, 
    getPirateGroup,
} = require("../../queries/pirateGroups")

// Index
pirateGroups.get("/", async (req, res) => {
    const allPirateGroupData = await getAllPirateGroupData();
    if(allPirateGroupData){
        res.status(200).json(allPirateGroupData)
    } else {
        res.status(404).json({ error: "No pirate group data found" }) // Error page. Look at app.js line 24
    }
});

// Show
pirateGroups.get("/:id", async (req, res) => {
    const { id } = req.params;
    const pirateGroupData = await getPirateGroup(id);
    if(pirateGroupData){
        res.status(200).json(pirateGroupData)
    } else {
        res.status(404).json({ error: "Can't find pirate group data" }) // Error page. Look at app.js line 24
    }
});




module.exports = pirateGroups;