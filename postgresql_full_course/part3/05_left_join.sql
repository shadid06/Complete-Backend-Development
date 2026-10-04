-- left join: left table + matching records from right table
-- if no matching records from right table, then right table columns will be NULL

SELECT posts.title as post_title,
       comments.body as comment_body
FROM posts
LEFT JOIN comments on posts.id = comments.post_id
ORDER BY posts.title;

-- query explanation:
-- 1. SELECT posts.title as post_title,
--        comments.body as comment_body
-- This line specifies the columns that we want to retrieve from the database.
-- 2. FROM posts
-- This line specifies the table that we want to retrieve the data from.
-- 3. LEFT JOIN comments on posts.id = comments.post_id
-- This line specifies the table that we want to join with the posts table.
-- 4. ORDER BY posts.title;
-- This line specifies the order in which we want to sort the data by.
