const db = require("../db/dbConfig");

const getAllCharacters = async () => {
    try{
        const allData = await db.any(`
        SELECT * FROM all_Characters`
        );
        return allData;
    }catch (err){
        return err;
    }
}

const getCharacters = async (id) => {
    try {
      const characterData = await db.one(`
      SELECT * FROM all_Characters
      WHERE all_Characters.id = $1`, id
      );
      return characterData;
    } catch (err) {
      return err;
    }
};



module.exports = { getAllCharacters, getCharacters };