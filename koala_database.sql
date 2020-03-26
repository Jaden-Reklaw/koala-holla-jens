CREATE TABLE koalas(
	id SERIAL PRIMARY KEY,
	name VARCHAR (120) NOT NULL,
	gender VARCHAR (1) NOT NULL,
	age INTEGER NOT NULL,
	ready_to_transfer VARCHAR(1),
  	notes VARCHAR (200) DEFAULT 'Want to Read'
);

INSERT INTO koalas (name, gender, age, ready_to_transfer, notes)
VALUES('Scotty', 'M', 4, 'Y', 'Born in Guatemala');
INSERT INTO koalas (name, gender, age, ready_to_transfer, notes)
VALUES('Jean', 'F', 5, 'Y', 'Allergic to lots of lava');
INSERT INTO koalas (name, gender, age, ready_to_transfer, notes)
VALUES('Ororo', 'F', 7, 'N', 'Loves listening to Paula (Abdul)');
INSERT INTO koalas (name, gender, age, ready_to_transfer, notes)
VALUES('Logan', 'M', 15, 'N', 'Loves the sauna');
INSERT INTO koalas (name, gender, age, ready_to_transfer, notes)
VALUES('Charlie', 'M', 9, 'Y', 'Favorite band is Nirvana');
INSERT INTO koalas (name, gender, age, ready_to_transfer, notes)
VALUES('Betsy', 'F', 4, 'Y', 'Has a pet iguana');