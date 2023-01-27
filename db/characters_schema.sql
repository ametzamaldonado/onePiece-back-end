\c one_piece_dev

DROP TABLE IF EXISTS all_Characters;

CREATE TABLE all_Characters (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL, 
    alive BOOLEAN,
    info TEXT,
    canon BOOLEAN,
    pirate BOOLEAN,
    marine BOOLEAN,
    photo TEXT,
    devil_fruitID INTEGER REFERENCES devil_fruits (id),
    pirate_groupID INTEGER REFERENCES pirate_GroupNames (id),
    marine_RanksID INTEGER REFERENCES marine_Ranks (id)
);