-- insert a product to dellete at products table

insert into products (sku, name, category, price, stock, is_active)
values ('PROD-DEL', 'Test Product Del', 'Test', 9.99, 10, true);


SELECT sku,
       name,
       category,
       price,
       stock,
       is_active
FROM products
WHERE sku = 'PROD-DEL';


DELETE
FROM products
WHERE sku = 'PROD-DEL';

-- delete multiple products

DELETE
FROM products
WHERE category = 'Test';

-- delete all products
 -- DELETE FROM products;