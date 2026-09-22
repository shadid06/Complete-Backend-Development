
SELECT name,
       price
FROM basics.products
WHERE price > 100
    AND is_active = true;


SELECT name,
       price
FROM basics.products
WHERE price > 100
    OR is_active = false;


SELECT name,
       price
FROM basics.products
WHERE NOT is_active;


SELECT name,
       price
FROM basics.products
WHERE NOT price > 100;