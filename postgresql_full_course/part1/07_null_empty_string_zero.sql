
CREATE TABLE basics.value_examples (id SERIAL PRIMARY KEY,
                                              nickname TEXT, bio TEXT, score INT);


INSERT INTO basics.value_examples (nickname, bio, score)
VALUES ('John', 'I like pizza', NULL),
       ('Jane', '', 100),
       ('Bob', NULL, 0);


SELECT *
FROM basics.value_examples
WHERE bio = ''
    OR score = 0
    OR nickname IS NULL;