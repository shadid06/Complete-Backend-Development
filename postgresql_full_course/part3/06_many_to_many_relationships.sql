-- many to many relationship: one parent row can have many child rows, and one child row can have many parent rows
-- example: posts and tags
-- in this case, posts is the parent table and tags is the child table.
-- one post can have many tags, and one tag can have many posts.

SELECT posts.title as post_title,
       tags.name as tag_name
FROM posts
INNER JOIN post_tags on posts.id = post_tags.post_id
INNER JOIN tags on post_tags.tag_id = tags.id
ORDER BY posts.title,
         tags.name;