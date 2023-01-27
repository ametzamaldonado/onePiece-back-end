const express = require("express");
const marines = express.Router();

const { 
    getAllMarinesData, 
} = require("../queries/marinesInfo")

// Index
marines.get("/", async (req, res) => {
    const allMarinesData = await getAllMarinesData();
    if(allMarinesData){
        res.status(200).json(allMarinesData)
    } else {
        res.status(500).json({ error: "server error" }) // Error page. Look at app.js line 24
    }
});



module.exports = marines;