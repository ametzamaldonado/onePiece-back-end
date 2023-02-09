DROP DATABASE IF EXISTS one_piece_dev;
CREATE DATABASE one_piece_dev;

\c one_piece_dev

DROP TABLE IF EXISTS types_of_devilFruits;

CREATE TABLE types_of_devilFruits (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    sub_type TEXT, 
    rare BOOLEAN
);

DROP TABLE IF EXISTS devil_fruits;

CREATE TABLE devil_fruits (
    id SERIAL PRIMARY KEY, 
    org_name TEXT NOT NULL,
    eng_name TEXT,
    canon BOOLEAN,
    movie TEXT,
    photo TEXT,
    descr TEXT NOT NULL,
    awakened TEXT,
    currentUser TEXT,
    previous_user TEXT,
    type_of_fruit INTEGER REFERENCES types_of_devilFruits (id)
);
