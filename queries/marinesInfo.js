const db = require("../db/dbConfig");

const getAllMarinesData = async () => {
    try{
        const allMarineData = await db.any(
            // code as is works!
            `SELECT mR.id, 
                mR.nameOfRank, 
                mR.info, 
                mRT.id AS marineRankTypes_Id, 
                mRT.typeOfRank 
            FROM marine_Ranks mR
            JOIN marine_RankTypes mRT
            ON mR.rankType = mRT.id`
            );
        return allMarineData;
    }catch (err){
        return err;
    }
}

const getOneMarineData = async (id) => {
    try{
        const oneMarineData = await db.one(
            // code as is works!
            `SELECT mR.id, 
                mR.nameOfRank, 
                mR.info, 
                mRT.id AS marineRankTypes_Id, 
                mRT.typeOfRank 
            FROM marine_Ranks mR
            JOIN marine_RankTypes mRT
            ON mR.rankType = mRT.id
            WHERE mR.id = $1`, id
            );
        return oneMarineData;
    }catch (err){
        return err;
    }
}


module.exports = { 
    getAllMarinesData, getOneMarineData 
};