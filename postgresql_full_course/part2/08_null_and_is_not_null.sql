-- null: checks if a value is null
-- is not null: checks if a value is not null

SELECT name,
       description,
       price
FROM products
WHERE description IS NULL; -- description is null


SELECT name,
       description,
       price
FROM products
WHERE description IS NOT NULL; -- description is not null


SELECT name,
       description,
       price
FROM products
WHERE description IS NOT NULL
    AND description LIKE 'Organic%'; -- description is not null and starts with Organic