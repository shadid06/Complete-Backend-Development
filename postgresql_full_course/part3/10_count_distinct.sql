-- count: counts the number of rows that match the criteria
 -- distinct: returns the number of unique values
-- count(distinct column_name): returns the number of unique values in the column
 --

SELECT COUNT(DISTINCT status) as total_unique_statuses
FROM posts;

-- count(DISTINCT column_name): returns the number of unique values in the column
-- Example:
-- status column has values: 'published', 'draft', 'published', 'draft', 'published', 'draft', 'published', 'draft', 'published', 'draft', 'published', 'draft'
-- COUNT(DISTINCT status): returns 2 because there are only 2 unique values in the status column
 -- count(column_name): returns the number of values in the column
-- Example:
-- status column has values: 'published', 'draft', 'published', 'draft', 'published', 'draft', 'published', 'draft', 'published', 'draft', 'published', 'draft'
-- COUNT(status): returns 12 because there are 12 values in the status column