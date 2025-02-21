create database blogdb;

use blogdb;



CREATE TABLE blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE blogs ADD COLUMN image VARCHAR(255);




select*from blogs;
SET SQL_SAFE_UPDATES = 0;
DELETE FROM blogs;
SET SQL_SAFE_UPDATES = 1;

 
 
 