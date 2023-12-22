CREATE DATABASE dellexpressDB;
CREATE USER dellexpress WITH ENCRYPTED PASSWORD 'senha';
ALTER ROLE dellexpress SET client_encoding TO 'utf8';
ALTER ROLE dellexpress SET default_transaction_isolation TO 'read committed';
ALTER ROLE dellexpress SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE dellexpressDB TO dellexpress;
