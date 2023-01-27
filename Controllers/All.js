// const express = require("express");
// const all = express.Router();

// const { getAllData } = require("../queries/devilFruitInfo")

// all.get("/", async (req, res) => {
//     const allData = await getAllData();
//     if(allData){
//         res.status(200).json(allData)
//     } else {
//         res.status(500).json({ error: "server error" }) // Error page. Look at app.js line 24
//     }
// });

// module.exports = all;