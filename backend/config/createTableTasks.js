import pool from "../db.js";

export default function createTableTasks(){
    const queryText= `
    CREATE TABLE IF NOT EXISTS tasks(
     id SERIAL PRIMARY KEY,
     user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
     task_name VARCHAR(255),
     is_completed BOOLEAN DEFAULT FALSE,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     is_deleted boolean default false
     )`


try{
    pool.query(queryText);
    console.log("tasks table created")

}
catch(error){
    console.log("Error creating tasks table", error);

}
}