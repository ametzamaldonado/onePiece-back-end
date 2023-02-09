const db = require("../db/dbConfig");

const getAllArcsData = async () => {
    try{
        const allArcData = await db.any(
            // code as is works!
            `SELECT sArcs.*, 
                sagas.id AS storySaga_id, 
                sagas.name AS storySaga_name, 
                mArcs.name AS mainArcs_name 
            FROM sub_arcs sArcs 
            JOIN main_arcs mArcs 
            ON sArcs.main_arcs_id = mArcs.id 
            JOIN story_Saga sagas 
            ON sagas.id = mArcs.saga_id;`
            );
        return allArcData;
    }catch (err){
        return err;
    }
}

const getSubArc = async (id) => {
    try{
        const oneArcData = await db.one(
            // code as is works!
            `SELECT sArcs.*, 
                sagas.id AS storySaga_id, 
                sagas.name AS storySaga_name, 
                mArcs.name AS mainArcs_name 
            FROM sub_arcs sArcs 
            JOIN main_arcs mArcs 
            ON sArcs.main_arcs_id = mArcs.id 
            JOIN story_Saga sagas 
            ON sagas.id = mArcs.saga_id
            WHERE sArcs.id=$1`, id
            );
        return oneArcData;
    }catch (err){
        return err;
    }
}

// const getSagas = async () => {
//     try {
//         const sagasData = await db.any (
//             `SELECT 
//                 sagas.* , 
//                 sArcs.*,
//                 mArcs.name AS mainArcs_name  
//             FROM story_Saga sagas
//             JOIN main_arcs mArcs
//             ON sagas.id = mArcs.saga_id 
//             JOIN sub_arcs sArcs  
//             ON sArcs.main_arcs_id = mArcs.id
//             ORDER BY sagas.id`
//         );
//         return sagasData
//     } catch (err) {
//         return err
//     }
// }




module.exports = { 
    getAllArcsData, 
    getSubArc
};