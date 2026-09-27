-- limit: limits the number of rows returned
-- offset: offsets the number of rows returned

SELECT name,
       price
FROM products
ORDER BY price DESC
LIMIT 5; -- sort by price in descending order and limit to 5


SELECT name,
       price
FROM products
ORDER BY price DESC
LIMIT 5
OFFSET 5; -- sort by price in descending order and limit to 5 and skip first 5