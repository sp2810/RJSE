import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../../layouts/AdminLayout";

function Product() {
    const [products , setProducts] = useState([]);
    const [currentPage , setCurrentPage] = useState(1);
    const [search , setSearch] = useState("");
    const [selectedProduct , setSelectedProduct] = useState(null);
    const [editProduct , setEdidtProduct] = useState(null);
    const [deleteProduct , setDeleteProduct] = useState(null);
    const iteamPerPage = 5;
    const handleEdit = (product) => {
         setEdidtProduct(product);
    }
    const handleDelete = (product) => {
        setDeleteProduct(product);
    }
    useEffect(() => {
        setCurrentPage(1);
    }, [search]);
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
    const handleUpdate = async () => {
        try {
            const responce = await axios.put(
                `https://dummyjson.com/products/${editProduct.id}`,
                {
                    title : editProduct.title ,
                    price : editProduct.price ,
                    category : editProduct.category
                }
            );
            console.log(responce.data);
            alert("Product Updated Successfully");
            setEdidtProduct(null);
        }
        catch (error) {
            console.log(error);
        }
    };
    const confirmDelete = async () => {
        try {
            await axios.delete(
                `https://dummyjson.com/products/${deleteProduct.id}`
            );
            setProducts(
              products.filter(
                (product) => product.id !== deleteProduct.id
              )
            )
            alert("Product Deleted Successfully");
            setDeleteProduct(null);
        }
        catch (error) {
            console.log(error);
        }
    };
    const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(search.toLocaleLowerCase()));
    const lastIndex = currentPage * iteamPerPage;
    const firstPage = lastIndex - iteamPerPage;
    const currentProducts = filteredProducts.slice(firstPage , lastIndex);
    const totalPage = Math.ceil(filteredProducts.length / iteamPerPage)
    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-6">
                Products
            </h1>
            <input
            type="text"
            placeholder="Search Product"
            className="border p-2 rounded mb-4 w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}/>
            <table className="w-full bg-white shadow rounded">
                <thead>
                <tr className="bg-gray-200">
                    <th className="p-3">Action</th>
                    <th className="p-3">ID</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Category</th>
                </tr>
                </thead>
                <tbody>
{currentProducts.map((product) => (
    <tr key={product.id} className="text-center border-b">
        <td className="p-3 flex gap-2 justify-center"><button className="bg-blue-500 text-white px-3 py-1 rounded"
        onClick={() => setSelectedProduct(product)}>
            View</button>
            <button className="bg-green-500 text-white px-3 py-1 rounded"
                onClick={() => handleEdit(product)}>
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => handleDelete(product)}>
                    Delete</button></td>
        <td className="p-3">{product.id}</td>
        <td className="p-3">{product.title}</td>
        <td className="p-3">{product.price}</td>
        <td className="p-3">{product.category}</td>
    </tr>
))}
                </tbody>
            </table>
            {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded w-96">
                        <h2 className="text-2xl font-bold mb-4">
                            {selectedProduct.title}
                        </h2>
                        <p><strong>Price :</strong>${selectedProduct.price}</p>
                        <p><strong>Category :</strong>${selectedProduct.category}</p>
                        <p><strong>Description :</strong>${selectedProduct.description}</p>
                        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                        onClick={() => setSelectedProduct(null)}>
                            Close
                        </button>
                    </div>
                </div>
            )};
            {editProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded w-96">
                      <h2 className="text-2xl font-bold mb-4">
                        Edit Form
                      </h2>
                      <input
                      type="text"
                      value={editProduct.title}
                      className="w-full border p-2 mb-3 rounded"
                      onChange={(e) => setEdidtProduct({
                        ...editProduct,
                        title:  e.target.value
                      })}/>
                      <input
                      type="number"
                      value={editProduct.price}
                      className="w-full border p-2 mb-3 rounded"
                      onChange={(e) => setEdidtProduct({
                        ...editProduct,
                        price:  e.target.value
                      })}/>
                      <input
                      type="text"
                      value={editProduct.category}
                      className="w-full border p-2 mb-3 rounded"
                      onChange={(e) => setEdidtProduct({
                        ...editProduct,
                        category:  e.target.value
                      })}/>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded"
                      onClick={handleUpdate}>
                        Update
                      </button>
                    </div>
                </div>

            )};
            {deleteProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded w-96">
                        <h2 className="text-xl font-bold mb-4">
                            Delete Product
                        </h2>
                        <p>
                            Are you sure you want to delete
                            <strong>{deleteProduct.title}</strong>
                        </p>
                        <div className="flex justify-end gap-3 mt-5">
                            <button
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                            onClick={() => setDeleteProduct(null)}>
                                Cancle
                            </button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded"
                            onClick={confirmDelete}>
                                Delete
                            </button>
                        </div>

                    </div>

                </div>
            )}
            <div className="flex justify-center items-center gap-4 mt-6">
                <button
                className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Previou
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