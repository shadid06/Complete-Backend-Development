
DROP TABLE IF EXISTS basics.students;


CREATE TABLE basics.students (id SERIAL PRIMARY KEY,
                                        name TEXT NOT NULL,
                                                  email TEXT NOT NULL UNIQUE,
                                                                      age INT CHECK (age > 18), created_at TIMESTAMP DEFAULT NOW(),
                                                                                                                             updated_at TIMESTAMP DEFAULT NOW());


SELECT *
FROM basics.students;

-- insert some data --

INSERT INTO basics.students (name, email, age)
VALUES ('Jane Smith', 'js@example.com', 22),
       ('Bob Johnson', 'bj@example.com', 30);