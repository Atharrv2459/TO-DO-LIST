import express from "express";
import pool from "../db.js";
import { authorization } from "../middleware/authorization.js";
export const getAllTasks=async(req,res)=>{
    try{
        const tasks = await pool.query(`select * from tasks`);
        res.status(202).json({data: tasks.rows});
    }
    catch(error){
        res.status(404).json({error});
    }

}


export const getUserTasks= async(req,res)=>{
    const user_id = req.user.user_id
    try{
        const UserTasks = await pool.query(`SELECT * from tasks WHERE user_id = $1`,[user_id]);
        res.status(202).json({"data": UserTasks.rows});

    }
    catch(error){
        res.status(404).json({"Error in fetching the users": error});

    }
}

export const getUserTask = async(req,res)=>{
    const{user_id}= req.user.user_id;
    const{task_name}= req.query;
    try{
        const UserTask = await pool.query(`select * from  tasks where task_name=$1 and user_id=$2`,[task_name,user_id]);
        res.status(202).json({"data":UserTask.rows[0]});
    }
    catch(error){
        res.status(404).json({"Error in fetching the users": error});
    }
}

export const addUserTask = async(req,res)=>{
    const {task_name}=req.body;
    const user_id= req.user.user_id;
    try {
        const task= await pool.query(`insert into tasks (user_id,task_name) values($1,$2) returning *`,[user_id,task_name]);
        res.status(201).json({"data":task.rows[0]});
        
    } catch (error) {
           res.status(404).json({error});
        
    }
}
export const updateUserTask = async(req,res)=>{
    const{is_completed}=req.body;
    const user_id =req.user.user_id;
    const{id}=req.params;
    try{
        const updated_at = is_completed ? new Date() : null;
        const user= await pool.query(`select * from tasks where user_id= $1`,[user_id]);
        if(user.rows.length ===0){
            res.status(404).json({"Error":"User does not exist"});
                }
        const updateTask = await pool.query(`update tasks set is_completed = $1, updated_at = $2 where id = $3 and user_id = $4 returning *`,[is_completed,updated_at,id,user_id]);
        res.status(201).json({"data":updateTask.rows[0]});
    }
    catch(error){
         res.status(404).json({error});
    }
}

export const deleteUserTask = async(req,res)=>{
    const user_id= req.user.user_id;
    const { id } = req.params;
  try {
    const result = await pool.query(
      `DELETE FROM tasks WHERE user_id = $1 AND id = $2 RETURNING *`,
      [user_id, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted", task: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: "Error deleting task", details: error.message });
  }

}



