
INSERT INTO products(sku, name, category, price, stock, is_active)
VALUES ('PROD-RET', 'Test Product RET', 'Test', 24.99, 10, true) RETURNING id,
                                                                           sku,
                                                                           name,
                                                                           category,
                                                                           price,
                                                                           stock,
                                                                           is_active;


UPDATE products
SET stock=stock+10
WHERE sku='PROD-RET' RETURNING id,
                               sku,
                               name,
                               category,
                               price,
                               stock,
                               is_active;


DELETE
FROM products
WHERE sku='PROD-RET' RETURNING id,
                               sku,
                               name,
                               category,
                               price,
                               stock,
                               is_active;


SELECT id,
       sku,
       name,
       category,
       price,
       stock,
       is_active
FROM products
WHERE sku='PROD-RET';