import { useEffect, useState } from "react";

import { useAuth } from "./customHook/useAuth";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
  const userToken = localStorage.getItem("token");

  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    console.log("Hello");

    if(!userToken){
      Swal.fire({
        title: "Sign in to continue",
        text: "You need to be signed in to access this page.",
        icon:"warnng",
        confirmButtonText: "Log in"
      }).then((result) => {
        if (result.isConfirmed) {
          setShouldRedirect(true)
        }
      })
    }  
  }, [userToken]);

  if (shouldRedirect) {
    return <Navigate to="/login" replace/>
  } else {
    return userToken ? children:null
  }
};

export default ProtectedRoute;
