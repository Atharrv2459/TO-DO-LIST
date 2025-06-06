import pool from "../db.js";
export default function createTableLogin(){
    const queryText= `
    CREATE TABLE IF NOT EXISTS users(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `
    try{
        pool.query(queryText);
        console.log("users table created");
    }
    catch(error){
        console.log("Could not create table");

    }
}