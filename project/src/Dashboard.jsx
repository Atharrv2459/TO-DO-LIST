import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Tables from "./components/Tables";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Tables />
        </main>
      </div>
    </div>
  );
}
