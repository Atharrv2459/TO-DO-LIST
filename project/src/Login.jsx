import { useState } from "react"
import { EyeClosedIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
export default function Login(){
    const [isPasswordShown,setIsPasswordShown]=useState(false);
    const[email,setEmail]=useState("");
    const[password,setPassword]= useState("");
     const navigate = useNavigate();

    const handleLogin= async (e)=>{
        e.preventDefault();
       
        try{
            const res = await axios.post(`http://localhost:5001/auth/login`,{
                email,password
            });
            const token = res.data.token;
            localStorage.setItem("token", token);
            navigate('/Dashboard');
            alert("User login successful");

        }
        catch(error){
            console.error("Login failed:", error.response?.data || error.message);
  alert("Login failed: " + (error.response?.data?.message || error.message));
        }
        
    }

    
    return (
        <div>
            <div className="m-0 min-h-screen min-w-screen bg-violet-600 flex items-center justify-center">
                <div className="bg-white rounded-xs">
                    <form onSubmit={handleLogin} className="flex flex-col gap-4 m-4">

                    <input type="email" placeholder="Enter email" className="outline-none border p-2"  onChange={(e) => setEmail(e.target.value)} ></input>
                    <input type="password" placeholder="Enter password" className="outline-none border p-2"  onChange={(e) => setPassword(e.target.value)}></input>
                    <button type="submit" className="font-bold bg-violet-500 p-2 cursor-pointer hover:bg-violet-600">Sign in</button>
                    </form>
                    <div className="flex gap-4 justify-center m-4">
                        <p>New user?</p>
                        <button onClick={()=> navigate("/Register")} className="font-bold cursor-pointer hover:underline">Sign up</button>
                    </div>
                </div>
                </div>
            </div>

    )
}