import express from "express";
import pool from "../db.js";
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
    const {user_id} = req.params;
    try{
        const UserTasks = await pool.query(`SELECT * from tasks WHERE user_id = $1`,[user_id]);
        res.status(202).json({"data": UserTasks.rows});

    }
    catch(error){
        res.status(404).json({"Error in fetching the users": error});

    }
}

export const getUserTask = async(req,res)=>{
    const{user_id}= req.params;
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
    const{user_id,task_name}=req.body;
    try {
        const task= await pool.query(`insert into tasks (user_id,task_name) values($1,$2) returning *`,[user_id,task_name]);
        res.status(201).json({"data":task.rows[0]});
        
    } catch (error) {
           res.status(404).json({error});
        
    }
}
export const updateUserTask = async(req,res)=>{
    const{is_completed}=req.body;
    const {user_id}=req.params;
    const{task_name}=req.query;
    try{
        const user= await pool.query(`select * from tasks where user_id= $1`,[user_id]);
        if(user.rows.length ===0){
            res.status(404).json({"Error":"User does not exist"});
                }
        const updateTask = await pool.query(`update tasks set is_completed = $1 where user_id = $2 and task_name = $3 returning *`,[is_completed,user_id,task_name]);
        res.status(201).json({"data":updateTask.rows[0]});
    }
    catch(error){
         res.status(404).json({error});
    }
}

export const deleteUserTask = async(req,res)=>{
    const {user_id}= req.params;
    const {}

}



