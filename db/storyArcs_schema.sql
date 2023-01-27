\c one_piece_dev

DROP TABLE IF EXISTS story_Saga CASCADE;

CREATE TABLE story_Saga (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL
);

DROP TABLE IF EXISTS main_arcs CASCADE;

CREATE TABLE main_arcs (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    episode_start INTEGER,
    epsiode_end INTEGER,
    saga_id INTEGER REFERENCES story_Saga (id)
);

DROP TABLE IF EXISTS sub_arcs;

CREATE TABLE sub_arcs (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    episodes TEXT NOT NULL,
    filler BOOLEAN,
    special BOOLEAN,
    image TEXT NOT NULL,
    main_arcs_id INTEGER REFERENCES main_arcs (id)
);

-- CREATE TABLE allArcsData AS 
-- SELECT 
--     sub_arcs.id, 
--     sub_arcs.name, 
--     sub_arcs.episodes, 
--     sub_arcs.filler, 
--     sub_arcs.special, 
--     sub_arcs.image,
--     story_Saga.id AS storySaga_id, 
--     story_Saga.name AS storySaga_name
--     story_Saga
--     main_arcs.id AS mainArcs_id, 
--     main_arcs.name AS mainArcs_name
-- FROM sub_arcs
-- JOIN main_arcs
-- ON sub_arcs.main_arcs_id = main_arcs.id
-- JOIN story_Saga
-- ON story_Saga.id = main_arcs.saga_id;