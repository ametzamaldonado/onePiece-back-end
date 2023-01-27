\c one_piece_dev;

INSERT INTO story_Saga ( name ) VALUES
('Sea of Survival: Super Rookies Saga'),
('The Final Sea: The New World Saga');

INSERT INTO main_arcs ( name, episode_start, epsiode_end, saga_id ) VALUES
('East Blue', 1, 61, 1),
('Arabasta', 62, 135, 1),
('Sky Island', 136, 206, 1),
('Water 7', 207, 325, 1),
('Thriller Bark', 326, 384, 1),
('Summit War', 385, 516, 1),
('Fish-Man Island', 517, 574, 2),
('Dressrosa', 575, 746, 2),
('Whole Cake Island', 747, 877, 2),
('Wano Country', 878, null, 2);

INSERT INTO sub_arcs ( name, episodes, filler, special, image, main_arcs_id) VALUES
('Romance Dawn', '1 - 3', false, false, 'https://static.wikia.nocookie.net/one-piece-manga/images/9/90/Romance_Dawn_Arc.png/revision/latest?cb=20150929205224', 1),

('Orange Town', '4 - 8', false, false, 'https://static.wikia.nocookie.net/onepiece/images/5/5a/Orange_Town_Arc.png/revision/latest/scale-to-width-down/350?cb=20130206004236', 1),

('Syrup Village', '9 - 18', false, false, 'https://static.wikia.nocookie.net/onepiece/images/b/bc/Syrup_Village_Arc.png/revision/latest?cb=20140728093425', 1),
('Baratie', '19 - 30', false, false, 'https://static.wikia.nocookie.net/onepiece/images/e/eb/Baratie_Infobox.png/revision/latest?cb=20191105160432', 1),

('Arlong Park', '31 - 44', false, false, 'https://static.wikia.nocookie.net/onepiece/images/1/19/Arlong_Park_Arc.png/revision/latest?cb=20180707115104', 1),

('Loguetown', '45, 48 - 53', false, false, 'https://lh5.googleusercontent.com/UbtTC48mAakLtIwCMXQWckMmPgtj45mu9QoDDibqFR9BRdRnio28qbULM5KKC79lwjleEbtkUauAAn5LtpAKXLMGcRgmqh4fHVEeIuVO_Kd9jcSRL-rqF_UaMVVD9MTUPOPUMUTcphasbH-IgwzeiHg98SxaA-qgHf1QI_2F0aPNoETh4u025_bl7jpXoQ', 1),

('Buggy''s Crew Adventure Chronicles', '46- 47', false, false, 'https://simkl.net/episodes/46/4604518b2a18634a8_0.jpg', 1),

('Warship Island', '54 - 61', true, false, 'hhttps://static.wikia.nocookie.net/onepiece/images/a/ab/Warship_Island_Infobox.png/revision/latest?cb=20150308214507', 1),

('Reverse Mountain', '62 - 63', false, false, 'https://www.opgt.it/wp-content/uploads/2018/07/reverse-mountain.jpg', 2), 

('Whiskey Peak', '64 - 67', false, false, 'https://comicvine.gamespot.com/a/uploads/original/7/72480/5215502-wp.jpg', 2),

('Diary of Koby-Meppo', '68 - 69', false, false,'https://vignette.wikia.nocookie.net/onepiece/images/3/3b/Chapter_84_Colored.png/revision/latest?cb=20140302104248&format=original', 2),

('Little Garden', '70 - 77', false, false,'https://i.pinimg.com/originals/19/92/25/199225fa052e1eb41e23f6705edb9139.jpg', 2),

('Drum Island', '78 - 91', false, false, 'https://static.wikia.nocookie.net/one-piece-manga/images/c/c3/Drum_Island_Arc.png/revision/latest?cb=20150929204313', 2),

('Arabasta', '92 - 130', false, false, 'https://static.wikia.nocookie.net/onepiece/images/0/0b/Arabasta_Arc.png/revision/latest?cb=20130125205914', 2),

('Post-Arabasta', '131 - 135', true, false, 'https://m.media-amazon.com/images/M/MV5BNjlkNmYwMjItMjU4ZS00ZTMzLTk0YjUtYWVjZjJiM2MzMTM3XkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_.jpg', 3),

('Goat Island', '136 - 138', true, false, 'https://static.wikia.nocookie.net/onepiece/images/8/85/Goat_Island_Arc.png/revision/latest?cb=20121026033510', 3),

('Ruluka Island', '139 - 143', true, false, 'https://static.wikia.nocookie.net/onepiece/images/7/7e/Ruluka_Infobox.png/revision/latest?cb=20130511055008', 3),

('Jaya', ' 144 - 152', false, false, 'https://2img.net/h/opwiki.de/images/Jaya_400_Years.jpg', 3),

('Skypiea', '153 - 195', false, false, 'https://static.wikia.nocookie.net/onepiece/images/d/d6/Skypiea_Arc.png/revision/latest?cb=20210107041826', 3),

('G-8', '196 - 206', true, false, 'https://static.wikia.nocookie.net/onepiece/images/9/97/G-8_Arc.png/revision/latest?cb=20121215232840', 3),

('Long Ring Long Island', '207 - 219', false, false,'https://static.wikia.nocookie.net/onepiece/images/3/33/Long_Ring_Long_Land_Arc.png/revision/latest?cb=20180706204342', 4),

('Ocean''s Dream', '220 - 224', true, false, 'https://i.postimg.cc/JhkSYDH2/Screen-Shot-2022-08-22-at-10-29-34-PM.png', 4),

('Foxy''s Return', '225 - 228', true, false, 'https://listfist.com/wp-content/uploads/one-piece-fillers.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1', 4),

('Water 7', '229 - 263', false, false, 'https://m.media-amazon.com/images/M/MV5BNmJkZWE3ZTQtYTNkNy00YTAwLTk5YzgtMDZiYTJkZmU0YjFkXkEyXkFqcGdeQXVyMjAwMzU2MDY@._V1_.jpg', 4),

('Enies Lobby', '264 - 290, 293 - 302, 304 - 312', false, false, 'https://i.ytimg.com/vi/oa0y5NHbbrM/maxresdefault.jpg', 4),

('Boss Luffy Historical Special', '291 - 292, 303, 406 - 407', false, true, 'https://static.wikia.nocookie.net/onepiece/images/5/52/DVD_Jidaigeki_Special_3.png/revision/latest?cb=20221110151310', 4),

('Post-Enies Lobby', '313 - 325', false, false, 'https://static.wikia.nocookie.net/onepiece/images/c/c9/Bounties_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20130626082046', 4),

('Ice Hunter', '326 - 335', true, false, 'https://static.wikia.nocookie.net/onepiece/images/9/97/Ice_Hunter_Arc.png/revision/latest/scale-to-width-down/1000?cb=20200512214358', 5),

('Chopper Man Special', '336', false, true,'https://m.media-amazon.com/images/M/MV5BZjdjYWUwNjYtODhkNC00NGViLWFkYjItNDI0YzNjYWUxNGQ0XkEyXkFqcGdeQXVyMjAwMzU2MDY@._V1_.jpg', 5),

('Thriller Bark', '337 - 381', false, false, 'https://static.wikia.nocookie.net/onepiece/images/3/37/Thriller_Bark_Infobox.png/revision/latest/scale-to-width-down/700?cb=20130619223733', 5),

('Spa Island', '382 - 384', true, false, 'https://static.wikia.nocookie.net/onepiece/images/b/bb/Spabirdeye.png/revision/latest/scale-to-width-down/1000?cb=20170521194050', 5),

('Sabaody Archipelago"', '385 - 405', false, false, 'https://i.pinimg.com/564x/79/37/73/7937739c8f4c1d5efd19442b5a1c29e4.jpg', 6),

('Amazon Lily', '408 - 417', false, false, 'https://static.wikia.nocookie.net/onepiece/images/8/88/Amazon_Lily_Infobox.png/revision/latest?cb=20160125002658', 6), 

('Straw Hat''s Separation Serial', '418 - 421, 453 - 456', false, false, 'https://i.postimg.cc/VvhLxdP0/Collage-Maker-11-Sep-2022-04-23-PM.jpg', 6),

('Impel Down', '422- 425, 4430 - 452', false, false, 'https://static.wikia.nocookie.net/onepiece/images/3/3e/Impel_Down.jpg/revision/latest/scale-to-width-down/1000?cb=20140201150120&path-prefix=tr', 6),

('Little East Blue', '426 - 429', true, false, 'https://static.wikia.nocookie.net/onepiece/images/c/c6/Little_East_Blue_Arc.png/revision/latest/scale-to-width-down/1000?cb=20130509191516', 6),

('Marineford', '457 - 489', false, false, 'https://static.wikia.nocookie.net/onepiece/images/2/28/Marineford_Arc.png/revision/latest/scale-to-width-down/1000?cb=20141114173244', 6),

('Post-War', '457 - 489', false, false, 'https://static.wikia.nocookie.net/onepiece/images/4/4c/Post-War_Arc.png/revision/latest?cb=20140728093938', 6), 

('Toriko Crossover Special', '492', false, true, 'https://static.wikia.nocookie.net/onepiece/images/5/5a/Episode_492.png/revision/latest/scale-to-width-down/1000?cb=20210125180423', 6),

('Return to Sabaody', '517 - 522', false, false, 'https://static.wikia.nocookie.net/onepiece/images/c/c6/Return_to_Sabaody_Arc.png/revision/latest/scale-to-width-down/700?cb=20210116220828', 7),

('Fish-Man Island', '523 - 541, 543 - 574', false, false, 'https://external-preview.redd.it/AjR2AYVQvHMXSpNzsOFMdd-yCadN5jjoJmk5vAZ5v3Q.jpg?auto=webp&s=37c969e75515b006699c3445ab47a8244296b0c4', 7),

('Toriko Crossover Special', '542', false, true, 'https://static.wikia.nocookie.net/onepiece/images/e/e4/Episode_542.png/revision/latest/scale-to-width-down/1000?cb=20130307200425', 7),

('Z''s Ambition', '575 - 578', true, false, 'https://static.wikia.nocookie.net/onepiece/images/6/69/Z%27s_Ambition_Arc.png/revision/latest?cb=20130622052036', 8),

-- ( name, episodes, filler, special, image, main_arcs_id) VALUES
('Punk Hazard', '579 - 589, 591 - 625', false, false, 'https://static.wikia.nocookie.net/powerlisting/images/8/8d/Punk_Hazard1.png/revision/latest?cb=20151229234523', 8),

('Toriko & Dragon Ball Crossover Special', '590',  false, true, 'https://static.wikia.nocookie.net/onepiece/images/e/e9/Episode_590.png/revision/latest/scale-to-width-down/1000?cb=20130409022947', 8),

('Caesar Retrieval', '626 - 628', true, false, 'https://static.wikia.nocookie.net/onepiece/images/c/c3/Episode_628.png/revision/latest/scale-to-width-down/1000?cb=20140802014835', 8),

('Dressrosa', '629 - 746', false, false, 'https://cdn.myanimelist.net/s/common/uploaded_files/1447001557-e4aa85a6868f2ebd486d38e76b4242b8.jpeg', 8),

('Silver Mine', '747 - 750', true, false, 'https://static.wikia.nocookie.net/onepiece/images/e/e0/Silver_Mine_Arc.png/revision/latest?cb=20161025082354', 9),

('Zou', '751 - 779', false, false, 'https://static.wikia.nocookie.net/onepiece/images/7/72/Zou_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20160911164033', 9),

('Marine Rookie', '780 - 782', true, false, 'https://static.wikia.nocookie.net/onepiece/images/2/26/Marine_Rookie_Arc.png/revision/latest/scale-to-width-down/350?cb=20170305014019', 9),

('Whole Cake Island', '783 - 877', false, false, 'https://m.media-amazon.com/images/M/MV5BNDI0NWY4NGEtNGY5MC00NDllLWExNDktZmEwMDQ2M2ZiM2NmXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_.jpg', 9),

('Levely', '878 - 889', false, false, 'https://static.wikia.nocookie.net/onepiece/images/1/11/Levely_Arc.png/revision/latest/scale-to-width-down/1000?cb=20211203193700', 10),

('Wano Country', '890 - 894, 897 - 906, 908 - 1028, 1031 - TBA', false, false, 'https://m.media-amazon.com/images/M/MV5BMjgwNzFjZGYtNTRhNC00YzA0LTliNmYtNTUyYjZiMWM1MDEwXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_.jpg', 10),

('Cidre''s Guild', '895 - 896', true, false, 'https://static.wikia.nocookie.net/onepiece/images/8/8f/Cidre_Guild_Arc_DVD.png/revision/latest?cb=20191230025953', 10),

('Anime 20th Anniversary Special', '907', false, true, 'https://static.wikia.nocookie.net/onepiece/images/8/85/Episode_907.png/revision/latest/scale-to-width-down/1000?cb=20191020023448', 10),

('Uta''s Past', '1029 - 1030', true, false, 'https://static.wikia.nocookie.net/onepiece/images/8/8b/Uta%27s_Past_Arc.png/revision/latest/scale-to-width-down/1000?cb=20220821094115', 10);


