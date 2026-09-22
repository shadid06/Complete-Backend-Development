
CREATE EXTENSION IF NOT EXISTS pgcrypto;


DROP TABLE IF EXISTS products;


CREATE TABLE products (id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                                                   name TEXT NOT NULL,
                                                             category TEXT NOT NULL,
                                                                           price NUMERIC(10, 2) NOT NULL CHECK (price>=0), stock INTEGER NOT NULL DEFAULT 0 CHECK (stock>=0), is_active BOOLEAN NOT NULL DEFAULT true,
                                                                                                                                                                                                                 sku TEXT UNIQUE,
                                                                                                                                                                                                                          description TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);


SELECT *
FROM products;


INSERT INTO products (name, category, price, stock, is_active, sku, description)
VALUES ('Laptop', 'Electronics', 1200, 10, true, 'LP-1234', 'High performance laptop'),
       ('Mouse', 'Electronics', 25, 100, true, 'MS-1234', 'Wireless mouse'),
       ('Keyboard', 'Electronics', 75, 50, true, 'KB-1234', 'Mechanical keyboard'),
       ('Monitor', 'Electronics', 300, 20, false, 'MN-1234', 'LED monitor'),
       ('Webcam', 'Electronics', 50, 30, true, 'WC-1234', 'HD webcam'),
       ('Headphones', 'Electronics', 100, 40, true, 'HD-1234', 'Noise cancelling headphones'),
       ('Microphone', 'Electronics', 75, 50, false, 'MC-1234', 'USB microphone'),
       ('Speakers', 'Electronics', 150, 60, false, 'SP-1234', 'Bluetooth speakers'),
       ('Printer', 'Electronics', 200, 70, true, 'PR-1234', 'Laser printer'),
       ('Scanner', 'Electronics', 125, 80, true, 'SC-1234', 'Flatbed scanner');