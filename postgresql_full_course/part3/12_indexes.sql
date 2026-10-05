-- Indexes help speed up data retrieval
-- creating an index on user_id column in posts table

CREATE INDEX idx_status ON posts(status);


SELECT *
FROM posts
WHERE status = 'published';

-- removing an index

DROP INDEX idx_status;

-- find the most recent posts

CREATE INDEX idx_created_at ON posts(created_at DESC);


SELECT *
FROM posts
ORDER BY created_at DESC
LIMIT 10;

-- drop index

DROP INDEX idx_created_at;