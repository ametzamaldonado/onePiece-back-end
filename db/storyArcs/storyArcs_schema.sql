\c one_piece_dev

DROP TABLE IF EXISTS story_Saga CASCADE;

CREATE TABLE story_Saga (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    mainArcs TEXT[]
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
    descr TEXT,
    main_arcs_id INTEGER REFERENCES main_arcs (id)
);
