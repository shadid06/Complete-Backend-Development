
CREATE EXTENSION IF NOT EXISTS pgcrypto;


DROP TABLE IF EXISTS post_tags;


DROP TABLE IF EXISTS comments;


DROP TABLE IF EXISTS posts;


DROP TABLE IF EXISTS tags;


DROP TABLE IF EXISTS users;


CREATE TABLE users (id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                                                name TEXT NOT NULL,
                                                          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                                                                                                      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);


CREATE TABLE posts
    (id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                                 user_id UUID NOT NULL REFERENCES users (id) ON DELETE CASCADE,
                                                                                       title TEXT not NULL,
                                                                                                  status TEXT NOT NULL DEFAULT 'draft',
                                                                                                                               views INTEGER NOT NULL DEFAULT 0 CHECK (views >= 0), created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                                                                                                                                                                                                                                updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);


CREATE TABLE comments
    (id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                                 post_id UUID NOT NULL REFERENCES posts (id) ON DELETE CASCADE,
                                                                                       user_id UUID NOT NULL REFERENCES users (id) ON DELETE CASCADE,
                                                                                                                                             body TEXT NOT NULL,
                                                                                                                                                       created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                                                                                                                                                                                                   updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);


CREATE TABLE tags (id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                                               name TEXT NOT NULL UNIQUE,
                                                                  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                                                                                                              updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);


CREATE TABLE post_tags
    (post_id UUID NOT NULL REFERENCES posts (id) ON DELETE CASCADE,
                                                           tag_id UUID NOT NULL REFERENCES tags (id) ON DELETE CASCADE,
                                                                                                               PRIMARY KEY (post_id,
                                                                                                                            tag_id)-- Composite Primary Key, need for many to many relationship
);

-- Seed data

insert into users(name)
values('Alice'),
      ('Bob'),
      ('Charlie'),
      ('Carol'),
      ('Dave'),
      ('Eve'),
      ('Frank'),
      ('Grace'),
      ('Heidi'),
      ('Ivan'),
      ('Judy'),
      ('Mallory');


insert into posts(user_id, title, status, views)
values((SELECT id FROM users WHERE name = 'Alice'), 'First Post', 'draft', 10),
      ((SELECT id FROM users WHERE name = 'Bob'), 'Second Post', 'published', 20),
      ((SELECT id FROM users WHERE name = 'Charlie'), 'Third Post', 'published', 30),
      ((SELECT id FROM users WHERE name = 'Carol'), 'Fourth Post', 'draft', 40),
      ((SELECT id FROM users WHERE name = 'Dave'), 'Fifth Post', 'published', 50),
      ((SELECT id FROM users WHERE name = 'Eve'), 'Sixth Post', 'draft', 60),
      ((SELECT id FROM users WHERE name = 'Frank'), 'Seventh Post', 'published', 70),
      ((SELECT id FROM users WHERE name = 'Grace'), 'Eighth Post', 'draft', 80),
      ((SELECT id FROM users WHERE name = 'Heidi'), 'Ninth Post', 'published', 90),
      ((SELECT id FROM users WHERE name = 'Ivan'), 'Tenth Post', 'draft', 100),
      ((SELECT id FROM users WHERE name = 'Judy'), 'Eleventh Post', 'published', 110),
      ((SELECT id FROM users WHERE name = 'Mallory'), 'Twelfth Post', 'draft', 120);


insert into tags(name)
values('Technology'),
      ('Science'),
      ('Business'),
      ('Health'),
      ('Sports'),
      ('Entertainment'),
      ('Travel'),
      ('Fashion'),
      ('Food'),
      ('Politics'),
      ('Education'),
      ('Environment');


insert into comments(post_id, user_id, body)
values((SELECT id FROM posts WHERE title = 'First Post'), (SELECT id FROM users WHERE name = 'Alice'), 'First comment'),
      ((SELECT id FROM posts WHERE title = 'Second Post'), (SELECT id FROM users WHERE name = 'Bob'), 'Second comment'),
      ((SELECT id FROM posts WHERE title = 'Third Post'), (SELECT id FROM users WHERE name = 'Charlie'), 'Third comment'),
      ((SELECT id FROM posts WHERE title = 'Fourth Post'), (SELECT id FROM users WHERE name = 'Carol'), 'Fourth comment'),
      ((SELECT id FROM posts WHERE title = 'Fifth Post'), (SELECT id FROM users WHERE name = 'Dave'), 'Fifth comment'),
      ((SELECT id FROM posts WHERE title = 'Sixth Post'), (SELECT id FROM users WHERE name = 'Eve'), 'Sixth comment'),
      ((SELECT id FROM posts WHERE title = 'Seventh Post'), (SELECT id FROM users WHERE name = 'Frank'), 'Seventh comment'),
      ((SELECT id FROM posts WHERE title = 'Eighth Post'), (SELECT id FROM users WHERE name = 'Grace'), 'Eighth comment'),
      ((SELECT id FROM posts WHERE title = 'Ninth Post'), (SELECT id FROM users WHERE name = 'Heidi'), 'Ninth comment'),
      ((SELECT id FROM posts WHERE title = 'Tenth Post'), (SELECT id FROM users WHERE name = 'Ivan'), 'Tenth comment'),
      ((SELECT id FROM posts WHERE title = 'Eleventh Post'), (SELECT id FROM users WHERE name = 'Judy'), 'Eleventh comment'),
      ((SELECT id FROM posts WHERE title = 'Twelfth Post'), (SELECT id FROM users WHERE name = 'Mallory'), 'Twelfth comment');


INSERT INTO post_tags(post_id, tag_id)
VALUES ((SELECT id FROM posts WHERE title = 'First Post'), (SELECT id FROM tags WHERE name = 'Technology')),
       ((SELECT id FROM posts WHERE title = 'Second Post'), (SELECT id FROM tags WHERE name = 'Science')),
       ((SELECT id FROM posts WHERE title = 'Third Post'), (SELECT id FROM tags WHERE name = 'Business')),
       ((SELECT id FROM posts WHERE title = 'Fourth Post'), (SELECT id FROM tags WHERE name = 'Health')),
       ((SELECT id FROM posts WHERE title = 'Fifth Post'), (SELECT id FROM tags WHERE name = 'Sports')),
       ((SELECT id FROM posts WHERE title = 'Sixth Post'), (SELECT id FROM tags WHERE name = 'Entertainment')),
       ((SELECT id FROM posts WHERE title = 'Seventh Post'), (SELECT id FROM tags WHERE name = 'Travel')),
       ((SELECT id FROM posts WHERE title = 'Eighth Post'), (SELECT id FROM tags WHERE name = 'Fashion')),
       ((SELECT id FROM posts WHERE title = 'Ninth Post'), (SELECT id FROM tags WHERE name = 'Food')),
       ((SELECT id FROM posts WHERE title = 'Tenth Post'), (SELECT id FROM tags WHERE name = 'Politics')),
       ((SELECT id FROM posts WHERE title = 'Eleventh Post'), (SELECT id FROM tags WHERE name = 'Education')),
       ((SELECT id FROM posts WHERE title = 'Twelfth Post'), (SELECT id FROM tags WHERE name = 'Environment'));


SELECT *
FROM posts;


SELECT *
FROM users;


SELECT *
FROM comments;


SELECT *
FROM tags;


SELECT *
FROM post_tags;