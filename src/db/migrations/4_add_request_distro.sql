CREATE TABLE requested_distros (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL UNIQUE, 
    status VARCHAR(20) NOT NULL DEFAULT 'pending'
);
