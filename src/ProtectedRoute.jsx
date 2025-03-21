


import { useEffect, useState } from "react";
import { useAuth } from "./customHook/useAuth";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const userToken = localStorage.getItem("token");

  useEffect(() => {
    if (!loading && !userToken) {
      Swal.fire({
        title: "Sign in to continue",
        text: "You need to be signed in.",
        icon: "warning",
        confirmButtonText: "Log in",
      }).then((result) => {
        if (result.isConfirmed) {
          setShouldRedirect(true);
        }
      });
    }
  }, [userToken, loading]);

  if (loading) return <p>Loading...</p>;

  if (shouldRedirect) return <Navigate to="/login" replace />;

  return userToken ? children : null;
};

export default ProtectedRoute;



// const ProtectedRoute = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(null); // `null` means still checking
//   const [shouldRedirect, setShouldRedirect] = useState(false);

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const response = await userFetch();
//         if (response.data.authenticated) {
//           setIsAuthenticated(true);
//         } else {
//           setIsAuthenticated(false);
//         }
//       } catch (error) {
//         console.log(error);
//         setIsAuthenticated(false);
//       }
//     };

//     checkAuth();
//   }, []);

//   useEffect(() => {
//     if (isAuthenticated === false) {
//       Swal.fire({
//         title: "Sign in to continue",
//         text: "You need to be signed in to create ten.",
//         icon: "warning",
//         confirmButtonText: "Log in",
//       }).then((result) => {
//         if (result.isConfirmed) {
//           setShouldRedirect(true);
//         }
//       });
//     }
//   }, [isAuthenticated]);

//   if (shouldRedirect) {
//     return <Navigate to="/login" replace />;
//   }

//   if (isAuthenticated === null) {
//     return <p>Loading...</p>; // Show a loading state while checking auth
//   }

//   return isAuthenticated ? children : null;
// };

// export default ProtectedRoute;
