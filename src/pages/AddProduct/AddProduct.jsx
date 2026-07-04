import { useState } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import axios from "axios";

function AddProduct() {
    const [fromData , setFromData] = useState({
title: "" ,
price: "" ,
category: "" ,
description: ""
});

const handleChange = (e) => {
    setFromData({
        ...fromData,
        [e.target.name]: e.target.value
    });
};

const handleSubmit = async (e) => {
e.prevenDefault();
try {
    const responce = await axios.post(
        "https://dummyjson.com/products/add",
        fromData
    );
    console.log(responce.data);
    alert("Product Added Successfully")
} catch (error) {
    console.log(error);
}
};
    return(
        <AdminLayout>
            <div className="max-w-lg mx-auto bg-white p-6 shadow rounded">
                <h1 className="text-2xl font-bold mb-4">
                    Add Product
                </h1>
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
                <button className="w-full bg-blue-500 text-white p-2 rounded">
                    Add Product
                </button>
            </div>
        </AdminLayout>
    )
}