import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const responce = await axios.post(
        "https://dummyjson.com/auth/login" ,
        {
          username : data.username,
          password : data.password,
        }
      );
      console.log(responce.data);
      localStorage.setItem("token" , responce.data.accessToken);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      alert("Invalid Credintial");
    } finally {
      setLoading(false);
    }
  };

  const navigate = useNavigate();
  const [ loading , setLoading ] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 mb-2 rounded"
          {...register("username", {
            required: "Username is required",
          })}
        />

        <p className="text-red-500 text-sm mb-2">
          {errors.username?.message}
        </p>

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-2 rounded"
          {...register("password", {
            required: "Password is required",
          })}
        />

        <p className="text-red-500 text-sm mb-4">
          {errors.password?.message}
        </p>

        <button
          className="w-full bg-blue-600 text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? "Loading ..." : "Login"}
        </button>
      </form>
    </div>
  );
}


export default Login;