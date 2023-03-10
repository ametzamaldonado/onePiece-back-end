const db = require("../db/dbConfig");

const getAllPirateGroupData = async () => {
    try{
        const allPirateGroupData = await db.any(`
        SELECT * FROM pirate_GroupNames`
        );
        return allPirateGroupData;
    }catch (err){
        return err;
    }
}

const getPirateGroup = async (id) => {
    try{
        const onePirateGroupData = await db.one(`
        SELECT * 
        FROM pirate_GroupNames 
        WHERE id=$1;`, id
        );
        return onePirateGroupData;
    }catch (err){
        return err;
    }
}


module.exports = { 
    getAllPirateGroupData, 
    getPirateGroup
};