-- foreign key: is a col that points to primary key of another table.
-- it is used to create relationships between tables.
-- it is used to maintain referential integrity.
-- we have tables: users, posts, comments, tags, post_tags
-- we have relationships: users -> posts, posts -> comments, posts -> tags, tags -> post_tags
-- we have foreign keys: user_id in posts, post_id and user_id in comments, post_id and tag_id in post_tags

SELECT *
FROM information_schema.table_constraints
WHERE constraint_type = 'FOREIGN KEY';