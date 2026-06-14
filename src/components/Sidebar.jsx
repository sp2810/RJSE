import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="w-64 h-screen bg-slate-800 text-white p-5">
            <h1 className="text-2xl font-bold mb-8">
              RJSE
            </h1>
            <ul className="space-y-4">
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/orders">Orders</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                

            </ul>
        </div>
    );
}
export default Sidebar;