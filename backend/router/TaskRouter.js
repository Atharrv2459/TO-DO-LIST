import express from "express";
import { deleteUser, getAllusers, getUser, loginUser, RegisterUser } from "../controller/UserController.js";
import { addUserTask, getAllTasks, getUserTask, getUserTasks, updateUserTask } from "../controller/TaskController.js";
const router= express.Router();

router.get("/Users",getAllusers);
router.get("/User/:user_id",getUser);
router.post("/register", RegisterUser);
router.post("/login",loginUser);
router.delete("/delete/:user_id",deleteUser);

router.get("/getAllTasks",getAllTasks);
router.get("/getUserTasks/:user_id",getUserTasks);
 router.get("/getUserTask/:user_id",getUserTask);
 router.post("/addUserTask",addUserTask);
// router.post("/add",addTask);
// router.delete("/delete",deleteTask);
router.patch("/updateTask/:user_id",updateUserTask);
// 



export default router;