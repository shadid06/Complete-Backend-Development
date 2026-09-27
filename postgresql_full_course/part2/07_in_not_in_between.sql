-- in : checks if a value is in a list of values
-- not in : checks if a value is not in a list of values
-- between : checks if a value is between two values (inclusive)

SELECT name,
       category,
       price
FROM products
WHERE category IN ('Beverages',
                   'Dairy',
                   'Condiments'); -- category is beverages or dairy or condiments


SELECT name,
       category,
       price
FROM products
WHERE category NOT IN ('Beverages',
                       'Dairy',
                       'Condiments'); -- category is not beverages or dairy or condiments


SELECT name,
       category,
       price
FROM products
WHERE price BETWEEN 10 AND 20; -- price is between 10 and 20


SELECT name,
       category,
       price
FROM products
WHERE price BETWEEN 1000 AND 2000
    AND category NOT IN ('Beverages',
                         'Dairy',
                         'Condiments'); -- price is between 1000 and 2000 and category is not beverages or dairy or condiments