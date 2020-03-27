CREATE TABLE todolist(
	id SERIAL PRIMARY KEY,
	task VARCHAR (120) NOT NULL,
	status VARCHAR (120) NOT NULL,
);

INSERT INTO todolist (task, status)
VALUES('work on coding for a hr','not complete');
INSERT INTO todolist (task, status)
VALUES('cook dinner','not complete');
INSERT INTO todolist (task, status)
VALUES('eat dinner','not complete');
INSERT INTO todolist (task, status)
VALUES('clean my room','not complete');
INSERT INTO todolist (task, status)
VALUES('go to sleep','not complete');
 