import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../../layouts/AdminLayout";

function Product() {
    const [products , setProducts] = useState([]);
    const [currentPage , setCurrentPage] = useState(1);
    const iteamPerPage = 5;
    const fetchProducts = async () => {
        try {
            const responce = await axios.get(
                "https://dummyjson.com/products"
            );
            setProducts(responce.data.products);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchProducts();
    } , []);
    const lastIndex = currentPage * iteamPerPage;
    const firstPage = lastIndex - iteamPerPage;
    const currentProducts = products.slice(firstPage , lastIndex);
    const totalPage = Math.ceil(products.length / iteamPerPage)
    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-6">
                Products
            </h1>
            <table className="w-full bg-white shadow rounded">
                <thead>
                <tr className="bg-gray-200">
                    <th className="p-3">ID</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Category</th>
                </tr>
                </thead>
                <tbody>
{currentProducts.map((product) => (
    <tr key={product.id} className="text-center border-b">
        <td className="p-3">{product.id}</td>
        <td className="p-3">{product.title}</td>
        <td className="p-3">{product.price}</td>
        <td className="p-3">{product.category}</td>
    </tr>
))}
                </tbody>
            </table>
            <div className="flex justify-center items-center gap-4 mt-6">
                <button
                className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Prev
                </button>
                <span className="font-bold">
                    Page {currentPage} of {totalPage}
                </span>
                <button
                className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
                disabled={currentPage === totalPage}
                onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </AdminLayout>
    )
}


export default Product;