import { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

function AddProduct() {
    const [fromData , setFromData] = useState({
title: "" ,
price: "" ,
category: "" ,
description: ""
});
const [loading , setLoading] = useState(false);

const handleChange = (e) => {
    setFromData({
        ...fromData,
        [e.target.name]: e.target.value
    });
};
const navigate = useNavigate();

const handleSubmit = async (e) => {
e.preventDefault();
try {
    setLoading(true);
    const responce = await axios.post(
        "https://dummyjson.com/products/add",
        fromData
    );
    console.log(responce.data);
    alert("Product Added Successfully");
    navigate("/products");
} catch (error) {
    console.log(error);
}
finally {
    setLoading(false);
}
};
    return(
        <AdminLayout>
            <div className="max-w-lg mx-auto bg-white p-6 shadow rounded">
                <h1 className="text-2xl font-bold mb-4">
                    Add Product
                </h1>
                <form onSubmit={handleSubmit}>
                    <input
                type="text"
                name="title"
                placeholder="Title"
                className="w-full border p-2 mb-3 rounded"
                onChange={handleChange}/>
                <input
                type="number"
                name="price"
                placeholder="Price"
                className="w-full border p-2 mb-3 rounded"
                onChange={handleChange}/>
                <input
                type="text"
                name="category"
                placeholder="Category"
                className="w-full border p-2 mb-3 rounded"
                onChange={handleChange}/>
                <textarea
                name="description"
                placeholder="Description"
                className="w-full border p-2 mb-3 rounded"
                onChange={handleChange}/>
                <button className="w-full bg-blue-500 text-white p-2 rounded"
                type="submit"
                disabled={loading}>
                    {loading ? "Adding ..." : "Add Product"}
                </button>
                </form>
            </div>
        </AdminLayout>
    )
}
export default AddProduct;