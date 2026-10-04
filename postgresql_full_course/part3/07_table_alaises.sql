-- alaises:
-- using alaises makes the query more readable and concise

SELECT u.name as author_name,
       p.title as post_title,
       p.status,
       p.views
FROM posts p
INNER JOIN users u on p.user_id = u.id
WHERE p.status = 'published'
ORDER BY p.views DESC;