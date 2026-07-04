import { BrowserRouter , Routes , Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Products from "../pages/Products/Products";
import Orders from "../pages/Orders/Orders";
import Users from "../pages/Users/Users";
import ProtectedRoute from "./ProtectedRoute";
import AddProduct from "../pages/AddProduct/AddProduct";
function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
        <Route path="/products" element={<ProtectedRoute><Products/></ProtectedRoute>} />
        <Route path="/orders" element={<ProtectedRoute><Orders/></ProtectedRoute>} />
        <Route path="/users" element={<ProtectedRoute><Users/></ProtectedRoute>} />
        <Route path="/add-product" element={<ProtectedRoute><AddProduct/></ProtectedRoute>} />
        </Routes>
            </BrowserRouter>
    )
}

export default AppRoutes;