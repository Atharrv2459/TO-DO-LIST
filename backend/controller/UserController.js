import express from "express";
import pool from "../db.js";
import bcrypt from "bcrypt";
import jwtGenerator from "../utils/JwtGenerator.js";
import { authorization } from "../middleware/authorization.js";
export const getAllusers= async(req,res)=>{
    try {
        const user= await pool.query(`SELECT * from users`);
        res.status(404).json({"data": user.rows});
        
    } catch (error) {
        res.status.json({"Error in fetching the users": error})
        
    }
}

export const getUser= async(req,res)=>{
    const {user_id} = req.params;
    try{
        const user = await pool.query(`SELECT * from users WHERE user_id=$1`,user_id);
        res.status.json({"data": user.rows[0]});

    }
    catch(error){
        res.status.json({"Error in fetching the users": error});

    }
}

export const RegisterUser= async(req,res)=>{
    const {name,email,password}= req.body;
    try{
        const user = await pool.query(`select * from users where email=$1`,[email]);
        console.log(user.rows[0]);
        if(user.rows.length> 0){
             res.status(401).json({"message":"user already exists with this email ID"})
            throw new Error("User already exists");
           
            

        }
        const hashed_password = await bcrypt.hash(password,10);
        const result = await pool.query(`insert into users(name,email,password) values($1,$2,$3) returning *`,[name,email,hashed_password]);
        const token = jwtGenerator(result.rows[0].user_id);
    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        user_id: result.rows[0].user_id,
        name: result.rows[0].name,
        email: result.rows[0].email,
      },
    });


    }
    catch(error){
        console.log("Error in registering the user", error);

    }
}

export const loginUser = async(req,res)=>{
    const {email,password}= req.body;
    try {
        const user = await pool.query(`SELECT * from users where email=$1`,[email])
            if(user.rows.length===0){
                throw new Error("User does not exist");
                
            }
            const userResult = user.rows[0];

            const isPasswordValid = await bcrypt.compare(password,userResult.password);
            if(!isPasswordValid){
                throw new Error("Password does not match");
                

            }

            const token = jwtGenerator(userResult.user_id);
                        res.status(202).json({ 
                            message: "Login Successful",
                            token,
                            user:{
                                user_id:userResult.user_id,
                                name: userResult.name,
                                email: userResult.email
                            }
                        });
                            }
     catch (error) {
        res.status(404).json({"Error is login ": error});
        
    }
    
}

export const deleteUser = async(req,res)=>{
    const {user_id}= req.params;
    try{
        const user= await pool.query(`Select * from users where user_id=$1`,[user_id]);
        if(user.rows.length===0){
            res.status(404).json({"User is already deleted":error});
        }
        const deletedUser = await pool.query(`delete from users where user_id=$1`,[user_id]);
        res.status(202).json({"Deleted user":deletedUser.rows});

    }
    catch(error){
        res.status(404).json({"Could not delete the user":error});

    }
}

export const changePassword = async(req,res,oldPassword,newPassword)=>{
    const {password} = req.body;
    const user_id = req.user.user_id;
    const user= await pool.query("Select * from users where user_id = $1",[user_id]);
    if(user.rows.length===0){
        res.status(404).json({"User not found":error});
    }

    const Match = await bcrypt.compare(oldPassword,user.rows[0].password);
    if(!Match){
        res.status(404).json({"Password not matched":error});
        const hashedPassword = await bcrypt.hash(newPassword, 10);
   const updatedPasswordUser= await pool.query("UPDATE users SET user_password = $1 WHERE email=$2 returning *",[hashedPassword,email]);
   return updatedPasswordUser.rows[0];
    }
}




