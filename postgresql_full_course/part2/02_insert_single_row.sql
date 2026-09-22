
INSERT INTO products (name, category, price, stock, is_active, sku, description)
VALUES ('Mouse_new', 'Electronics', 35, 120, true, 'MS-1234-new', 'Wireless mouse_new');


SELECT *
FROM products
WHERE name = 'Mouse_new';