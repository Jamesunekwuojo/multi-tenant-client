import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";
import { useAuth } from "../customHook/useAuth.jsx";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const { login } = useAuth();

  const navigate = useNavigate()
  

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await login(formData);

      // navigate("/dashboard")

    

      if (result.success) {
        console.log("User login successfully");

        navigate("/dashboard")
      
       
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: error?.response?.data?.message || "Login failed",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <Link to="/" className="absolute left-8 top-8 flex items-center gap-2">
        <Building2 className="h-6 w-6 text-blue-600" />
        <span className="text-xl font-bold">TenantHub</span>
      </Link>

      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <div className="space-y-1 mb-6">
          <h2 className="text-2xl font-bold">Login</h2>
          <p className="text-gray-600">
            Enter your credentials to access your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>

            <input
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="name@example.com"
              className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-xs text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <input
              name="password"
              onChange={handleChange}
              type="password"
              className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-black py-2 text-white text-sm font-medium hover:bg-black cursor-pointer"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
