-- group by clause is used to group rows that have the same values in one or more columns
 -- where vs group by:
-- where: filters rows before grouping
-- group by: groups rows after filtering
 -- having vs where:
-- where: filters rows before grouping
-- having: filters groups after grouping

SELECT status,
       COUNT(*) as total_posts
FROM posts
WHERE status = 'published'
GROUP BY status;


SELECT status,
       COUNT(*) as total_posts
FROM posts
GROUP BY status
HAVING COUNT(*) > 2;