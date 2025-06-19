import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ChangePassword(){
    const [ email , setEmail]= useState("");
    const [oldPassword, SetOldPassword]= useState("");
    const [newPassword, SetNewPassword]= useState("");
    const navigate = useNavigate();

    const handleNameChange= async(e)=>{
        e.preventDefault();
        try{
            const token = localStorage.getItem('token');
            const res= await axios.patch('http://localhost:5001/auth/change-Password',{
                email,oldPassword,newPassword
            },{
                headers:{
                    token : token
                }})
                alert("Password changed successfully")
            }
            

        
        catch(err){
            alert(JSON.stringify(err.response?.data || "Something went wrong"));

        }
    }
    return(<div>

    <form onSubmit={handleNameChange} className='flex flex-col items-center gap-4 w-full bg-white p-8 rounded-xl'>
    <input type="text" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
    <input type="text" placeholder="Enter old password"  onChange={(e) => SetOldPassword(e.target.value)} />
    <input type="text" placeholder="Enter new password"  onChange={(e) => SetNewPassword(e.target.value)} />
    <button type="submit" className='flex flex-row gap-2 items-center justify-center cursor-pointer font-bold bg-gray-300 hover:bg-gray-400 w-36 h-10 border rounded-xs'>Change Password</button>
    </form>
    </div>
    )

}

export default ChangePassword;