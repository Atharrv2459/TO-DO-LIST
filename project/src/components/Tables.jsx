export default function Tables(){
    return (
        <div>
    <div className="flex justify-between my-4"><p className="font-bold m-8">Tasks</p>
    <button onClick="#modal" className="bg-violet-600 rounded-2xl h-10 flex items-center p-4 my-6 font-bold cursor-pointer hover:bg-violet-700">Add new task</button>
    <div className="flex flex-col my-5">
        <p>Total tasks</p>
        <p>Completed tasks</p>
    </div>
    </div>
    <table className="table-auto">
        <tr className="flex gap-24 mx-10">
    <th>Task_ID</th>
    <th>Task_name</th>
    <th>Status</th>
    <th>Added at</th>
    <th>Completed at</th>
    <th>update</th>
</tr>
<tr>

</tr>
    
    </table>
    </div>);
}