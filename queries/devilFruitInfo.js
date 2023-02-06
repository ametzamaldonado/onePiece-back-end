const db = require("../db/dbConfig");

const getAllData = async () => {
    try{
        const allData = await db.any(
          `SELECT df.*, 
            tdF.name AS type_name, 
            tdF.sub_type AS type_subType, 
            tdF.rare AS type_rare 
          FROM devil_fruits df 
          JOIN types_of_devilFruits tdF 
          ON df.type_of_fruit = tdf.id`
        );
        return allData;
    }catch (err){
        return err;
    }
}

// Show page
const getDevilFruit = async (id) => {
    try {
      const devilFruit = await db.one(
        `SELECT df.*, 
          tdF.name AS type_name, 
          tdF.sub_type AS type_subType, 
          tdF.rare AS type_rare 
        FROM devil_fruits df 
        JOIN types_of_devilFruits tdF 
        ON df.type_of_fruit = tdf.id
        WHERE df.id=$1`, id
      );
      return devilFruit;
    } catch (err) {
      return err;
    }
};




module.exports = { getAllData, getDevilFruit };