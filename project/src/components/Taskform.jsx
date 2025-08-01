import { useState } from "react";
import axios from "axios";
import { Toaster,toast } from "react-hot-toast";

export default function Taskform({ isOpen, onClose,fetchTasks }) {
  const [task_name, setTask_name] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:5001/auth/addUserTask",
        { task_name },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setTask_name("");
      onClose(); 
      toast.success("Task added successfully");
    } catch (error) {
      toast.error("Error adding task");
    }
    fetchTasks();
  };

  if (!isOpen) return null;

  return (
    <dialog open className="fixed top-1/3 left-1/3  bg-white shadow-lg p-10 rounded">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          placeholder="Enter task name"
          value={task_name}
          onChange={(e) => setTask_name(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 cursor-pointer transition">
          Add New Task
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 cursor-pointer transition"
        >
          Close
        </button>
      </form>
    </dialog>
  );
}
