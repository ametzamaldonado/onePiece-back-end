const express = require("express");
const marines = express.Router();

const { 
    getAllMarinesData, getOneMarineData
} = require("../../queries/marinesInfo")

// Index
marines.get("/", async (req, res) => {
    const allMarinesData = await getAllMarinesData();
    if(allMarinesData){
        res.status(200).json(allMarinesData)
    } else {
        res.status(500).json({ error: "server error" }) // Error page. Look at app.js line 24
    }
});

marines.get("/:id", async (req, res) => {
    const { id } = req.params;
    const marineType = await getOneMarineData(id);
    console.log(marineType)
    if (marineType.id) {
      res.json(marineType);
    } else {
      res.status(404).json({ error: "marine type not found!" });
    }
});


module.exports = marines;