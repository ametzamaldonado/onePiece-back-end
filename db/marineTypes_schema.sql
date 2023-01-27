\c one_piece_dev

DROP TABLE marine_RankTypes CASCADE;

CREATE TABLE marine_RankTypes (
    id SERIAL PRIMARY KEY, 
    typeOfRank TEXT NOT NULL
);

-- DROP TABLE IF EXISTS marine_Ranks;

CREATE TABLE marine_Ranks (
    id SERIAL PRIMARY KEY, 
    nameOfRank TEXT NOT NULL,
    info TEXT,
    rankType INTEGER REFERENCES marine_RankTypes (id)
);

-- DROP TABLE marine_RankTypes CASCADE <-- deletes TABLE marine_Ranks because they are linked, per line #16