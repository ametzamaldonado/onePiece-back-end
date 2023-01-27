const db = require("../db/dbConfig");

const getAllMarinesData = async () => {
    try{
        const allMarineData = await db.any(
            // code as is works!
            "SELECT marine_Ranks.id, marine_Ranks.nameOfRank, marine_Ranks.info, marine_RankTypes.id AS marineRankTypesId, marine_RankTypes.typeOfRank FROM marine_Ranks JOIN marine_RankTypes ON marine_Ranks.rankType = marine_RankTypes.id;"
            );
        return allMarineData;
    }catch (err){
        return err;
    }
}

module.exports = { 
    getAllMarinesData, 
};