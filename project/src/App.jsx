import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Tables from "./components/Tables";
export default function App(){
    return(
        <div>
            <Navbar />
            <div className="flex flex-row"><Sidebar />
            <Tables /></div>
        </div>
    )
}