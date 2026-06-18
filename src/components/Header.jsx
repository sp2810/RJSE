import { Navigate, useNavigate } from "react-router-dom";
function Header() {
    const navigate = useNavigate();
    function handleLogot() {
        localStorage.removeItem("token");
        navigate("/");
    }
    return (
        <div className="h-16 bg-white shadow flex items-center justify-between px-6">
            <h2 className="text-2xl font-semibold">
            E-Commerce Admin Dashboard
            </h2>
            <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={handleLogot}>Logout</button>
        </div>
    );
}

export default Header;