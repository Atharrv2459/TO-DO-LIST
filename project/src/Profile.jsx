import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
export default function Profile(){
    return (
    <div>
        <Navbar />
        <div className="flex">
        <Sidebar />
        <div className=" flex flex-col mx-10 gap-10">
            <div className="flex flex-row justify-center items-center gap-12">
        <label className="text-3xl font-bold">Username</label>
        <p className="text-3xl">Atharrv</p></div>

         <div className="flex flex-row justify-center items-center gap-12">
        <label className="text-3xl font-bold" >Email</label>
        <p className="text-3xl">atharrv@gmail.com</p></div>


        <button className="bg-violet-700 rounded-xl">Edit username</button>
        <button className="bg-violet-700 rounded-xl">Change password</button>
        </div>        
        </div>
    </div>)
}