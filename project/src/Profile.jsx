import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile(){

    const [oldPassword, setOldPassword]= useState("");
    const [newPassword, setNewPassword]= useState("");
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const navigate = useNavigate();

    useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`http://localhost:5001/auth/User`, {
          headers: {
            Authorization: token,
          },
        });

        setName(res.data.data.name); 
        setEmail(res.data.data.email);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);
    const handleNameChange= async(e)=>{
        e.preventDefault();
        try{
            const token = localStorage.getItem('token');
            const res= await axios.patch('http://localhost:5001/auth/changePassword',{
                oldPassword,newPassword
            },{
                headers:{
                    Authorization : token
                }})
                alert("Password changed successfully");
                setOldPassword("");
                setNewPassword("");
                
            }
            

        
        catch(err){
            alert(JSON.stringify(err.response?.data || "Something went wrong"));

        }
    }
    return (
    <div>
        <Navbar />
        <div className="flex ">
        <Sidebar />

        <div className=" flex flex-col items-center gap-5 my-16 mx-48">
          

<div className="bg-white shadow rounded-2xl w-full max-w-2xl p-8">
            <p className="text-4xl font-bold text-center">Profile</p>
            <br></br>
            <div className="flex flex-row justify-start text-left gap-6">
        <p className="text-xl font-bold text-black ">Username:</p>
        <p className="text-xl text-black">{name}</p></div>

         <div className="flex flex-row justify-start items-center gap-6">
        <p className="text-xl font-bold" >Email:</p>
        <p className="text-xl">{email}</p></div>
        <br>
        </br>
        <br>
        </br>
        <p className="text-2xl font-bold">Want to change you password?</p>
        <form onSubmit={handleNameChange} className='flex flex-col items-center gap-4 w-full bg-white p-8 rounded-xl'>
    <input type="password" placeholder="Enter old password" className="border outline-none rounded-xs p-2" onChange={(e) => setOldPassword(e.target.value)} />
    <input type="password" placeholder="Enter new password" className="border outline-none rounded-xs p-2"  onChange={(e) => setNewPassword(e.target.value)} />
    <button type="submit" className="bg-yellow-500 rounded-xs font-bold w-56 p-2 cursor-pointer hover:bg-yellow-600 transition">Change Password</button>
    </form>
        </div> 
        </div>       
        </div>
    </div>)
}