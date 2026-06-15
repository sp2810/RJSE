import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;