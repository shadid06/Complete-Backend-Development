-- sub queries are queries inside a query
 -- run inner query first then outer query
 -- Example:
-- select * from posts
-- where user_id = (select id from users where username = 'Alice');
 -- which posts are performing better

SELECT title,
       status,
       views
FROM posts
WHERE views >
        (SELECT AVG(views)
         FROM posts);