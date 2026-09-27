
SELECT name,
       category,
       price,
       is_active
FROM products;


UPDATE products
SET price = price * 1.1
WHERE category = 'Electronics';


SELECT name,
       category,
       price,
       is_active
FROM products;