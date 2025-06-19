import Taskform from "./Taskform";
import { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete, MdCheck } from 'react-icons/md';
import { FaPlus } from "react-icons/fa";
import { Toaster, toast } from 'react-hot-toast';

export default function Tables() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchTasks = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:5001/auth/getUserTasks", {
      headers: {
        Authorization: token,
      },
    });
    setTasks(res.data.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    await axios.delete(`http://localhost:5001/auth/deleteTask/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    fetchTasks();
    toast.success("Task deleted successfully");
  };

  const handleComplete = async (id) => {
    const token = localStorage.getItem("token");
    await axios.patch(
      `http://localhost:5001/auth/updateTask/${id}`,
      { is_completed: true },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    fetchTasks();
    toast.success("Task marked as completed");
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.is_completed).length;
  const pendingTasks = tasks.filter(task => !task.is_completed);
  const finishedTasks = tasks.filter(task => task.is_completed);

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-6">
      <Toaster />

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Tasks</h1>
          <p className="text-gray-600 mt-2">Total tasks: {totalTasks} | Completed tasks: {completedTasks}
          </p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 cursor-pointer rounded-xl flex items-center gap-2 transition"
        >
          <FaPlus />
          Add new task
        </button>
      </div>

      <div className="bg-white shadow-md rounded-2xl overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-gray-700 font-medium">Task Name</th>
              <th className="px-6 py-3 text-gray-700 font-medium">Status</th>
              <th className="px-6 py-3 text-gray-700 font-medium">Added At</th>
              <th className="px-6 py-3 text-gray-700 font-medium text-center">Update</th>
            </tr>
          </thead>
          <tbody>
            {pendingTasks.map((task, index) => (
              <tr key={task.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="px-6 py-4">{task.task_name}</td>
                <td className="px-6 py-4">
                  <span className="px-4 py-1 text-sm rounded-full font-semibold text-white bg-red-600">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4">{new Date(task.created_at).toLocaleString()}</td>
                <td className="px-6 py-4 flex justify-center gap-3">
                  <button className="bg-rose-500 hover:bg-rose-600 cursor-pointer text-white p-2 rounded-xl transition shadow"
                    onClick={() => handleDelete(task.id)}
                  >
                    <MdDelete />
                  </button>
                  <button className="bg-emerald-500 hover:bg-emerald-600 cursor-pointer text-white p-2 rounded-xl transition shadow"
                    onClick={() => handleComplete(task.id)}>
                    <MdCheck />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

  
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Finished Tasks</h2>
        <div className="bg-white shadow-md rounded-2xl overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-gray-700 font-medium">Task Name</th>
                <th className="px-6 py-3 text-gray-700 font-medium">Completed At</th>
              </tr>
            </thead>
            <tbody>
              {finishedTasks.map((task, index) => (
                <tr key={task.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-6 py-4">{task.task_name}</td>
                  <td className="px-6 py-4">
                    {task.updated_at ? new Date(task.updated_at).toLocaleString() : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Taskform isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} fetchTasks={fetchTasks} />
    </div>
  );
}
