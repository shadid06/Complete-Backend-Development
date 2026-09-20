
DROP TABLE IF EXISTS products;


CREATE TABLE basics.products (-- string max 100 chars
 name VARCHAR(100) NOT NULL,
                   description TEXT, stock INTEGER DEFAULT 0,
                                                           total_views BIGINT DEFAULT 0, -- exact decimal values
 price NUMERIC(10, 2),
       is_active BOOLEAN DEFAULT TRUE,
                                 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                                              updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- unique constraint
 CONSTRAINT name_length_check CHECK (length(name) > 2));

--queries---

INSERT INTO basics.products (name, description, stock, total_views, price, is_active)
VALUES ('Apple', 'Fresh red apple', 50, 12345, 10.50,TRUE),
       ('Banana', 'Fresh yellow banana', 100, 54321, 20.75,FALSE),
       ('Orange', 'Fresh orange', 150, 64321, 30.25,TRUE);


SELECT *
FROM basics.products;


SELECT *
FROM basics.products
WHERE is_active = TRUE;