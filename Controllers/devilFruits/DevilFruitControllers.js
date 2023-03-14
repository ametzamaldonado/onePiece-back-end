const express = require("express");
const devilFruits = express.Router();

// FOLLOW 'ALL' CONTROLLER!! IT WORKS!
const { getAllData, getDevilFruit } = require("../../queries/devilFruitInfo")

// Index
devilFruits.get("/", async (req, res) => {
    const allData = await getAllData();
    if(allData){
        res.status(200).json(allData)
    } else {
        res.status(500).json({ error: "server error" }) // Error page. Look at app.js line 24
    }
});

// Show 
devilFruits.get("/:id", async (req, res) => {
    const { id } = req.params;
    const devilFruit = await getDevilFruit(id);
    console.log(devilFruit)
    if (devilFruit.id) {
      res.json(devilFruit);
    } else {
      res.status(404).json({ error: "devil fruit not found!" });
    }
});


module.exports = devilFruits;