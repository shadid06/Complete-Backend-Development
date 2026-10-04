-- aggregate function: perform a calculation on a set of values and return a single value
 -- count: return the number of rows

SELECT COUNT(*) as total_posts
FROM posts;

-- sum: return the sum of values

SELECT SUM(views) as total_views
FROM posts;

-- avg: return the average of values

SELECT AVG(views) as average_views
FROM posts;

-- min: return the minimum value

SELECT MIN(views) as minimum_views
FROM posts;

-- max: return the maximum value

SELECT MAX(views) as maximum_views
FROM posts;

-- group by: return the number of rows for each group

SELECT status,
       COUNT(*) as total_posts
FROM posts
GROUP BY status;