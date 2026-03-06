-- =====================================================
-- RESET DATABASE (Optional but recommended)
-- =====================================================

DROP DATABASE IF EXISTS Employee_Database;

CREATE DATABASE Employee_Database;
USE Employee_Database;



-- =====================================================
-- Employee Basic Details
-- =====================================================

CREATE TABLE employee_basic_details(

employee_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

employee_first_name VARCHAR(20) NOT NULL,
employee_last_name VARCHAR(50) NOT NULL,

email VARCHAR(100) NOT NULL UNIQUE,
phone VARCHAR(15) UNIQUE NOT NULL,

gender VARCHAR(20) NOT NULL,

address1 VARCHAR(100) NOT NULL,
address2 VARCHAR(100),

city VARCHAR(100) NOT NULL,
state VARCHAR(100) NOT NULL,
zipcode VARCHAR(10) NOT NULL,

birth_date DATE NOT NULL,

relationship VARCHAR(20)

);
drop table employee_basic_details;


-- =====================================================
-- Education Details
-- =====================================================

CREATE TABLE education_details(

education_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

employee_id BIGINT UNSIGNED NOT NULL,

degree VARCHAR(50) NOT NULL,
board VARCHAR(100) NOT NULL,
passing_year SMALLINT NOT NULL,
percentage DECIMAL(5,2) NOT NULL,

CONSTRAINT fk_education_employee
FOREIGN KEY (employee_id)
REFERENCES employee_basic_details(employee_id)
ON DELETE CASCADE

);



-- =====================================================
-- Experience Details
-- =====================================================

CREATE TABLE experience_table(

experience_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

employee_id BIGINT UNSIGNED NOT NULL,

company_name VARCHAR(100),

from_date DATE NOT NULL,
to_date DATE NOT NULL,

leave_reason VARCHAR(100),

reference_contact VARCHAR(15),
reference_name VARCHAR(100),

CONSTRAINT fk_experience_employee
FOREIGN KEY (employee_id)
REFERENCES employee_basic_details(employee_id)
ON DELETE CASCADE

);



-- =====================================================
-- Languages Known
-- =====================================================

CREATE TABLE language_known(

language_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

employee_id BIGINT UNSIGNED NOT NULL,

language_name VARCHAR(50),

can_read BOOLEAN,
can_write BOOLEAN,
can_speak BOOLEAN,

CONSTRAINT fk_language_employee
FOREIGN KEY (employee_id)
REFERENCES employee_basic_details(employee_id)
ON DELETE CASCADE

);



-- =====================================================
-- Technologies Known
-- =====================================================

CREATE TABLE technologies_known(

technology_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

employee_id BIGINT UNSIGNED NOT NULL,

technology_name VARCHAR(50) NOT NULL,
skill_level VARCHAR(20) NOT NULL,

CONSTRAINT fk_technology_employee
FOREIGN KEY (employee_id)
REFERENCES employee_basic_details(employee_id)
ON DELETE CASCADE

);



-- =====================================================
-- Reference Contacts
-- =====================================================

CREATE TABLE reference_contact(

reference_contact_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

employee_id BIGINT UNSIGNED NOT NULL,

reference_contact_name VARCHAR(50) NOT NULL,
reference_contact_number VARCHAR(15) UNIQUE NOT NULL,

CONSTRAINT fk_reference_employee
FOREIGN KEY (employee_id)
REFERENCES employee_basic_details(employee_id)
ON DELETE CASCADE

);



-- =====================================================
-- Preferences
-- =====================================================

CREATE TABLE preferences_table(

preference_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

employee_id BIGINT UNSIGNED NOT NULL,

preferred_location VARCHAR(100),
notice_period VARCHAR(50) NOT NULL,
expected_ctc BIGINT NOT NULL,

CONSTRAINT fk_preference_employee
FOREIGN KEY (employee_id)
REFERENCES employee_basic_details(employee_id)
ON DELETE CASCADE

);



-- =====================================================
-- Sample Insert
-- =====================================================

INSERT INTO employee_basic_details(
employee_first_name,
employee_last_name,
email,
phone,
gender,
address1,
address2,
city,
state,
zipcode,
birth_date,
relationship
)
VALUES(
'Siddharth',
'Parmar',
'sid@gmail.com',
'0123456788',
'male',
'address1',
'address2',
'Ahmedabad',
'Gujarat',
'380001',
'1998-05-10',
'married'
);



-- =====================================================
-- View Data
-- =====================================================

SELECT * FROM employee_basic_details;
truncate table employee_basic_details;
