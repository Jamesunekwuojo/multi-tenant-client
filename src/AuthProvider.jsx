import { useState, useEffect } from "react";

import { AuthContext } from "./AuthContext.jsx";

import Swal from "sweetalert2";

import { loginUser, signupUser, userFetch } from "./services/api.js";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state for fetching



  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!localStorage.getItem("token")) {
          setUser(null);
          return;
        }
        const response = await userFetch();
        if (response.status == 200) {
          const data = await response.data.user;

          console.log(data)
         
          setUser(data.user); // Set the user if authenticated
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // Signup function
  const signup = async (formData) => {
    try {
      const response = await signupUser(formData);

      localStorage.setItem("token", response.data.token);

      if (response.status === 200) {
        setUser(response.data.user); // Update user context
        console.log(response.data.user);

        Swal.fire({
          title: "Success",
          text: "Signup  successfullly",
          icon: "success",
          confirmButtonText: "Ok",
        });

        return { success: true };
      } else {
        return {
          success: false,
          message: response.data.message || "Signup failed",
        };
      }
    } catch (error) {
      console.error("Error signing up:", error.response || error);
      Swal.fire({
        title: "Error",
        text: error?.data?.message || "Error Signing  up",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return {
        success: false,
        message: error.response?.data?.message,
      };
    }
  };

  // Login function
  const login = async (formData) => {
    try {
      const response = await loginUser(formData);

      localStorage.setItem("token", response.data.token);

      // localStorage.setItem("username", JSON.stringify(response.data.user));

      if (response.status == 200) {

        const data = await response.data;
        console.log("login Data",data)
        console.log("login Data name",data.admin.name)

        localStorage.setItem("username", data.admin.name); // Set the token

        setUser(data.user); // Set the user data

        Swal.fire({
          title: "Log in Successful",
          text: "Logged in successfullly",
          icon: "success",
          confirmButtonText: "Ok",
        });

        return { success: true };
      } else {
        const errorData = await response.data;
        return { success: false, message: errorData.message };
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error?.data?.message || "Error Logging in",
        icon: "error",
        confirmButtonText: "Ok",
      });
      console.error("Error logging in:", error);
      return { success: false, message: error.data };
    }
  };

  // Logout function
  const logout = async () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, loading, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
