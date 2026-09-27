-- order by: sorts the result set in ascending or descending order

SELECT name,
       price
FROM products
ORDER BY price ASC; -- sort by price in ascending order


SELECT name,
       price
FROM products
ORDER BY price DESC; -- sort by price in descending order


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


SELECT name,
       price,
       id
FROM products
ORDER BY price DESC,
         name ASC; -- sort by price in descending order and then by name in ascending order


SELECT name,
       price,
       id
FROM products
ORDER BY price DESC,
         id DESC; -- sort by price in descending order and then by id in descending order