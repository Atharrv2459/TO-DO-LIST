import express from "express";
const app= express();
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js";
import createTableLogin from "./config/createTableLogin.js";
import createTableTasks from "./config/createTableTasks.js";
import userRoutes from "./router/TaskRouter.js"


const port = process.env.PORT || 5001;

dotenv.config();


//middleware
app.use(express.json());
app.use(cors());

app.use("/auth",userRoutes);


app.get("/" , async(req,res)=>{
    const result = await pool.query("SELECT current_database()");
    res.send(`The databse name is : ${result.rows[0].current_database}`)
})

createTableLogin();
createTableTasks();
app.listen(port , ()=>{
    console.log(`Server running on ${port}`)
})