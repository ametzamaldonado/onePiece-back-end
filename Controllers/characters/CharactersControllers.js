const express = require("express");
const characters = express.Router();

// FOLLOW 'ALL' CONTROLLER!! IT WORKS!
const { getAllCharacters, getCharacters } = require("../../queries/characters")

// Index
characters.get("/", async (req, res) => {
    const allData = await getAllCharacters();
    if(allData){
        res.status(200).json(allData)
    } else {
        res.status(500).json({ error: "server error" }) // Error page. Look at app.js line 24
    }
});

// Show <-- doesnt work! Throws error!!
characters.get("/:id", async (req, res) => {
    const { id } = req.params;
    const getCharacter = await getCharacters(id);
    console.log(getCharacter)
    if (getCharacter.id) {
      res.json(getCharacter);
    } else {
      res.status(404).json({ error: "user not found" });
    }
});



module.exports = characters;