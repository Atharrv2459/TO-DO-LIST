import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";

export default function Register(){
    const navigate= useNavigate();
    const [name,setName]=useState("");
    const [ email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    
    const handleRegister=async(e)=>{
        e.preventDefault();
       
        try{
            const res = await axios.post("http://localhost:5001/auth/register",{name,email,password});
            alert("User Register successful");
            navigate('/Dashboard')

        }
        catch(error){
            console.error("Error in registering",error)
            alert("User Registration Failed")
        }
    }
    return (
        <div>
            <div className="m-0 min-h-screen min-w-screen bg-violet-600 flex items-center justify-center">
                <div className="bg-white rounded-xs">
                    <form onSubmit={handleRegister} className="flex flex-col gap-4 m-4">
                        <input type="text" placeholder="Enter User name" onChange={(e) => setName(e.target.value)} className="outline-none border p-2" ></input>
                    <input type="email" placeholder="Enter email" className="outline-none border p-2" onChange={(e) => setEmail(e.target.value)}></input>
                    <input type="password" placeholder="Enter password" className="outline-none border p-2" onChange={(e) => setPassword(e.target.value)}></input>
                    <button type="submit" className="font-bold bg-violet-500 p-2 cursor-pointer hover:bg-violet-600">Sign up</button>
                    </form>
                </div>
                </div>
        </div>
    )
}