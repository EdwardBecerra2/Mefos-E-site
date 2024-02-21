DROP DATABASE IF EXISTS tech_db;

CREATE DATABASE tech_db;

USE tech_db;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL
);
-- you can delete this later
-- CREATE TABLE IF NOT EXISTS `Sessions` (
--   `sid` varchar(255) NOT NULL PRIMARY KEY,
--   `expires` datetime NOT NULL,
--   `data` text,
--   `createdAt` datetime NOT NULL,
--   `updatedAt` datetime NOT NULL
-- );