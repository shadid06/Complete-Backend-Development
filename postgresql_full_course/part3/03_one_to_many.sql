-- one parent row can have many child rows, but one child row can have only one parent row
-- example: users and posts
 -- in this case, users is the parent table and posts is the child table.
-- one user can have many posts, but one post can have only one user.

SELECT users.name as author_name,
       posts.title as post_title,
       posts.status
FROM users
INNER JOIN posts on users.id = posts.user_id
ORDER BY users.name,
         posts.title;