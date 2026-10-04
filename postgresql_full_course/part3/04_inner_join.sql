-- inner join: only matching records from both tables

SELECT users.name as author_name,
       posts.title as post_title,
       posts.status,
       posts.views
FROM posts
INNER JOIN users on posts.user_id = users.id
WHERE posts.status = 'published'
ORDER BY posts.views DESC;

-- query explanation:
-- 1. SELECT users.name as author_name,
--        posts.title as post_title,
--        posts.status,
--        posts.views
-- This line specifies the columns that we want to retrieve from the database.
-- 2. FROM posts
-- This line specifies the table that we want to retrieve the data from.
-- 3. INNER JOIN users on posts.user_id = users.id
-- This line specifies the table that we want to join with the posts table.
-- 4. WHERE posts.status = 'published'
-- This line specifies the condition that we want to filter the data by.
-- 5. ORDER BY posts.views DESC;
-- This line specifies the order in which we want to sort the data by.
