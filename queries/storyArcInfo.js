const db = require("../db/dbConfig");

const getAllArcsData = async () => {
    try {
        const allArcData = await db.any(
            // code as is works!
            `SELECT 
                sArcs.id,
                sArcs.name,
                sArcs.episodes,
                sArcs.filler,
                sArcs.special,
                sArcs.image,
                sArcs.descr, 
                sagas.name AS storySaga_name, 
                mArcs.name AS mainArcs_name
            FROM sub_arcs sArcs 
            JOIN main_arcs mArcs 
            ON sArcs.main_arcs_id = mArcs.id 
            JOIN story_Saga sagas 
            ON sagas.id = mArcs.saga_id;`
        );
        return allArcData;
    } catch (err) {
        return err;
    }
}

const getSubArc = async (id) => {
    try {
        const oneArcData = await db.one(
            // code as is works!
            `SELECT 
                sArcs.id,
                sArcs.name,
                sArcs.episodes,
                sArcs.filler,
                sArcs.special,
                sArcs.image,
                sArcs.descr, 
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
    } catch (err) {
        return err;
    }
}

// StorySagaController
const getSagas = async () => {
    try {
        const sagasData = await db.any(
            `SELECT  * FROM story_Saga`
        );
        return sagasData
    } catch (err) {
        return err
    }
}

const getSagaId = async (id) => {
    try {
        const sagaData = await db.one(
            `SELECT * FROM story_Saga WHERE story_Saga.id=$1`, id 
        );
        return sagaData
    } catch (err) {
        return err
    }
}


// StoryMainController
const getMainArc = async () => {
    try {
        const mainArcData = await db.any(
            `SELECT * FROM main_arcs`
        );
        return mainArcData
    } catch (err) {
        return err
    }
}

const getMainArcId = async (id) => {
    try {
        const mainArcData = await db.one(
            `SELECT * FROM main_arcs WHERE main_arcs.id=$1`, id 
        );
        return mainArcData
    } catch (err) {
        return err
    }
}







module.exports = {
    getAllArcsData,
    getSubArc,
    getSagas,
    getSagaId,
    getMainArc,
    getMainArcId
};