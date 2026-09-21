-- NOT NULL, UNIQUE, PK, FK, CHECK, DEFAULT
 -- app, script, developer

DROP TABLE IF EXISTS basics.accounts;


CREATE TABLE basics.accounts (id SERIAL PRIMARY KEY,
                                        username TEXT NOT NULL,
                                                      email TEXT UNIQUE,
                                                                 is_active BOOLEAN DEFAULT true,
                                                                                           age INTEGER CHECK (age >= 18), created_at TIMESTAMP DEFAULT NOW());


INSERT INTO basics.accounts (username, email, is_active, age)
VALUES ('John', 'example1@gmail.com', true, 25),
       ('Jane', 'example2@gmail.com', false, 18),
       ('Bob', 'example3@gmail.com', true, 35),
       ('Alice', 'example5@gmail.com', false, 25);


INSERT INTO basics.accounts (username, email, is_active, age)
VALUES ('Eve', 'example6@gmail.com', false, 16);


SELECT *
FROM basics.accounts;