
SELECT sku
FROM products;


SELECT name,
       stock,
       sku
FROM products
WHERE sku = 'LP-1234';


UPDATE products
SET stock = stock - 5
WHERE sku = 'LP-1234';


UPDATE products
SET stock = stock + 5
WHERE sku = 'LP-1234';

--now using set

UPDATE products
SET stock = 50,
    price = 25.00
WHERE sku = 'LP-1234';


SELECT name,
       stock,
       price,
       sku
FROM products
WHERE sku = 'LP-1234';