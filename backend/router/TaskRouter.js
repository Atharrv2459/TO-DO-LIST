import express from "express";
import { authorization } from "../middleware/authorization.js";
import { changePassword, deleteUser, getAllusers, getUser, loginUser, RegisterUser } from "../controller/UserController.js";
import { addUserTask, deleteUserTask, getAllTasks, getUserTask, getUserTasks, updateUserTask } from "../controller/TaskController.js";
const router= express.Router();

router.get("/Users",getAllusers);
router.get("/User",authorization,getUser);
router.post("/register", RegisterUser);
router.post("/login",loginUser);
router.delete("/delete/:user_id",deleteUser);
router.patch("/changePassword",authorization,changePassword);

router.get("/getAllTasks",getAllTasks);
router.get("/getUserTasks",authorization,getUserTasks);
 router.get("/getUserTask/:user_id",authorization,getUserTask);
 router.post("/addUserTask",authorization,addUserTask);
// router.post("/add",addTask);
router.delete("/deleteTask/:id",authorization,deleteUserTask);
router.patch("/updateTask/:id",authorization,updateUserTask);




export default router;