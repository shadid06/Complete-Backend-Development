-- like case sensetive
-- ilike case insensetive
-- % any sequance of characters
-- _ any single character

SELECT name,
       price
FROM products
WHERE name LIKE 'mo%'; -- name started with mo


SELECT name,
       price
FROM products
WHERE name LIKE '_i%'; -- name has i as second character


SELECT name,
       price
FROM products
WHERE name LIKE '_i%e'; -- name has i as second character and e as last character


SELECT name,
       price
FROM products
WHERE name LIKE 'wi%e'; -- name started with wi and end with e