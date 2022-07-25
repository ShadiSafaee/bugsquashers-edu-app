DROP TABLE IF EXISTS submission;
DROP TABLE IF EXISTS lessons;
DROP TABLE IF EXISTS modules;
DROP TABLE IF EXISTS user_data;
CREATE TABLE user_data (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(30) NOT NULL,
    surname VARCHAR(30) NOT NULL,
    email VARCHAR(30) UNIQUE NOT NULL,
    password VARCHAR (255) NOT NULL,
    dob VARCHAR(12) NOT NULL,
    country VARCHAR(50) NOT NULL,
    role VARCHAR(10) NOT NULL
);
CREATE TABLE modules (
    id SERIAL PRIMARY KEY,
    module_name VARCHAR(100) NOT NULL,
    module_description VARCHAR(6000),
    module_created_date VARCHAR(20) NOT NULL
);
CREATE TABLE lessons (
    id SERIAL PRIMARY KEY,
    module_id INT NOT NULL REFERENCES modules(id) ON DELETE CASCADE,
    lesson_name VARCHAR(200) NOT NULL,
    lesson_description VARCHAR(6000),
    lesson_type VARCHAR(50) NOT NULL,
    lesson_url VARCHAR(100),
    lesson_created_date VARCHAR(20) NOT NULL
);
CREATE TABLE submission (
    id SERIAL PRIMARY KEY,
    lesson_id INT NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
    user_id INT NOT NULL REFERENCES user_data(id),
    comment VARCHAR(8000),
    created_date Date NOT NULL DEFAULT CURRENT_DATE,
    type VARCHAR(30) ,
    url VARCHAR(100),
    mark INT,
    mark_by INT REFERENCES user_data(id),
    mark_comments VARCHAR(8000) DEFAULT NULL
);