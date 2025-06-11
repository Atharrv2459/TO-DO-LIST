import Taskform from "./Taskform";
import { useState, useEffect } from "react";
import axios from "axios";
import { CheckCheckIcon, DeleteIcon } from "lucide-react";

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
  };

  const handleToggleComplete = async (id) => {
    const token = localStorage.getItem("token");
    await axios.patch(
      `http://localhost:5001/auth/updateTask/${id}`,
      { is_completed: true }, // or toggle logic
      {
        headers: {
          Authorization: token,
        },
      }
    );
    fetchTasks();
  };

  return (
    <div>
      <div className="flex justify-between my-4">
        <p className="font-bold m-10 text-2xl">Tasks</p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-violet-600 rounded-2xl h-10 flex items-center p-4 my-6 font-bold cursor-pointer hover:bg-violet-700"
        >
          Add new task
        </button>

        <div className="flex flex-col my-5">
          <p>Total tasks</p>
          <p>Completed tasks</p>
        </div>
      </div>

      <table className="table-auto min-w-full mx-10">
        <thead>
          <tr className="bg-gray-100 text-left">
      
      <th className="px-4 py-2 border">Task Name</th>
      <th className="px-4 py-2 border">Status</th>
      <th className="px-4 py-2 border">Added At</th>
      <th className="px-4 py-2 border">Update</th>
    </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="px-4 py-2 border">{task.task_name}</td>
              <td className="px-4 py-2 border">{task.is_completed ? "Completed" : "Pending"}</td>
              <td className="px-4 py-2 border">{new Date(task.created_at).toLocaleString()}</td>

              <td className="px-4 py-2 border">
                <button className="bg-violet-500 rounded-xs px-4 py-2 hover:bg-violet-700 cursor-pointer mx-4" onClick={() => handleDelete(task.id)}>
                  Delete
                </button>
                <button  className="bg-violet-500 rounded-xs px-4 py-2 hover:bg-violet-700 cursor-pointer"  onClick={() => handleToggleComplete(task.id)}>
                  Complete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br>
      </br>
      <br></br>
      <br></br>
      <p className="mx-10 text-2xl font-bold">Finished tasks</p>
<br></br>

        <table className="table-auto min-w-full mx-10">
        <thead>
          <tr className="bg-gray-100 text-left">
      
      <th className="px-4 py-2 border">Task Name</th>
      <th className="px-4 py-2 border">Completed at</th>
    </tr>
        </thead>
      </table>

      <Taskform isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} fetchTasks={fetchTasks} />
    </div>
  );
}
