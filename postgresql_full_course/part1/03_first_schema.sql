-- USE postgresql_part1;

CREATE SCHEMA IF NOT EXISTS BASICS;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- query ---

SELECT schema_name
FROM information_schema.schemata
ORDER BY schema_name ASC;


