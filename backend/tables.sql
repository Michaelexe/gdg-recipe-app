CREATE TABLE IF NOT EXISTS users (
    userid INT NOT NULL PRIMARY KEY,
    username varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS recipes (
    recipeid INT NOT NULL PRIMARY KEY,
    title varchar(255) NOT NULL,
    ingredients varchar(255) NOT NULL,
    instructions varchar(255) NOT NULL
);