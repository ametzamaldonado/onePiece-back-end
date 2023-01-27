const express = require("express");
const arcs = express.Router();

const { 
    getAllArcsData, 
    // getMainArcs 
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

// Show <-- doesnt work! Throws error!!
arcs.get("/:id", async (req, res) => {
    const { id } = req.params;
    if(sArcs[id]){
        res.json(sArcs[id])
    } else {
        res.redirect("*") // Error page. Look at app.js line 24
    }
});

// Doesnt work to pull main data. Just an attempt to see if it would display
// arcs.get("/main", async (req, res) => {
//     const allMainArcData = await getMainArcs();
//     if(allMainArcData){
//         res.status(200).json(allMainArcData)
//     } else {
//         res.status(500).json({ error: "server error" }) // Error page. Look at app.js line 24
//     }
// });

module.exports = arcs;