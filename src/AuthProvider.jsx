import { useState, useEffect } from "react";

import { AuthContext } from "./AuthContext";

import { loginUser, signupUser, userFetch } from "./services/api";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state for fetching

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = userFetch();
        if (response.status == 200) {
          const data = await response.data;
          console.log(data);
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
        return { success: true };
      } else {
        return {
          success: false,
          message: response.data.message || "Signup failed",
        };
      }
    } catch (error) {
      console.error("Error signing up:", error.response || error);
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

      if (response.status == 200) {
        const data = await response.data;
        setUser(data.user); // Set the user data
        return { success: true };
      } else {
        const errorData = await response.data;
        return { success: false, message: errorData.message };
      }
    } catch (error) {
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
