\c one_piece_dev

DROP TABLE IF EXISTS pirate_GroupNames;

CREATE TABLE pirate_GroupNames (
    id SERIAL PRIMARY KEY, 
    eng_name TEXT,
    romanized_name TEXT,
    canon BOOLEAN,
    info TEXT,
    jollyRoger TEXT
);
