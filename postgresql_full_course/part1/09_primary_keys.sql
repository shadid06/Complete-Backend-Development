
DROP TABLE IF EXISTS basics.sales;


CREATE TABLE basics.sales (id SERIAL PRIMARY KEY,
                                     product TEXT, amount NUMERIC(10, 2) NOT NULL DEFAULT 0,
                                                                                          customer_id INTEGER NOT NULL,
                                                                                                              created_at TIMESTAMP DEFAULT NOW());


INSERT INTO basics.sales (product, amount, customer_id)
VALUES ('Laptop', 1200, 1),
       ('Mouse', 25, 1),
       ('Keyboard', 75, 2);


SELECT *
FROM basics.sales
WHERE id =1;