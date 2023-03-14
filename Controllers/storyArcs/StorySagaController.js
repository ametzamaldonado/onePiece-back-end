const express = require("express");
const sagas = express.Router();

const { 
    getSagas,
    getSagaId
} = require("../../queries/storyArcInfo")


sagas.get("/", async (req, res) => {
    const sagas = await getSagas();
    console.log(sagas)
    if(sagas){
        res.json(sagas)
    } else {
        res.status(404).json({ error: "Sagas not found" })  // Error page. Look at app.js line 24
    }
});

sagas.get("/:id", async (req, res) => {
    const { id } = req.params;
    const sagaData = await getSagaId(id);
    if(sagaData.id){
        res.json(sagaData)
    } else {
        res.status(404).json({ error: "saga id not found" })  // Error page. Look at app.js line 24
    }
});

module.exports = sagas;