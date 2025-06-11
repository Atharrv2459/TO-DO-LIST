import { useState } from "react";
import axios from "axios";

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
      setTask_name(""); // Clear input after submission
      onClose(); // Close modal after submit
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <dialog open className="fixed top-1/3 left-1/3 bg-white shadow-lg p-6 rounded">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          placeholder="Enter task name"
          value={task_name}
          onChange={(e) => setTask_name(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-violet-700 text-white py-2 px-4 rounded">
          Add New Task
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-400 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </form>
    </dialog>
  );
}
