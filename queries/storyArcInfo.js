const db = require("../db/dbConfig");

const getAllArcsData = async () => {
    try{
        const allArcData = await db.any(
            // code as is works!
            "SELECT sArcs.*, sagas.id AS storySaga_id, sagas.name AS storySaga_name, mArcs.name AS mainArcs_name FROM sub_arcs sArcs JOIN main_arcs mArcs ON sArcs.main_arcs_id = mArcs.id JOIN story_Saga sagas ON sagas.id = mArcs.saga_id;"
            );
        return allArcData;
    }catch (err){
        return err;
    }
}

// const getMainArcs = async () => {
//     try{
//         const allMainArcData = await db.any(
//             "SELECT * FROM allArcsData;"
//             );
//         return allMainArcData;
//     }catch (err){
//         return err;
//     }
// }






module.exports = { 
    getAllArcsData, 
    // getMainArcs 
};