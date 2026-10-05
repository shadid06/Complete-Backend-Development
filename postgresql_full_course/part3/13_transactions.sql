-- Transactions help ensure data integrity
-- Example: Transfer money from one account to another
-- multiple sql statements that must succeed or fail together
-- START TRANSACTION;
-- UPDATE accounts SET balance = balance - 100 WHERE id = 1;
-- UPDATE accounts SET balance = balance + 100 WHERE id = 2;
-- COMMIT;
BEGIN;


UPDATE posts
SET status = 'published'
WHERE title = 'First Post'
    AND status = 'draft';


UPDATE posts
SET views = views + 100
WHERE title = 'First Post'
    AND status = 'published';


SELECT *
FROM posts
WHERE title = 'First Post';


COMMIT;


ROLLBACK;