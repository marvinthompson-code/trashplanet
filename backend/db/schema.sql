DROP DATABASE IF EXISTS trashplanet_db;
CREATE DATABASE trashplanet_db;

\c trashplanet_db;

DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id VARCHAR PRIMARY KEY,
    email VARCHAR UNIQUE,
    username VARCHAR,
    full_name VARCHAR
);

CREATE TABLE items (
    id VARCHAR PRIMARY KEY,
    item_image_url VARCHAR,
    category VARCHAR,
    caption VARCHAR,
    price INT,
    size VARCHAR
);





