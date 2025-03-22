import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import Home from "./pages/Homepage.jsx";
import Footer from "./components/Footer.jsx";
import Mainnav from "./components/Mainnav.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Adminpage from "./pages/Tenantpage.jsx";
import Adminsidebar from "./pages/Adminsidebar.jsx";
import TenantDataForm from "./components/TenantDataForm.jsx";
import TenantForm from "./components/TenantForm.jsx";

import TenantDataList from "./components/TenantDataDetails.jsx";

import ProtectedRoute from "./ProtectedRoute.jsx";

import TenantDatapage from "./pages/TenantDatapage.jsx";
import Tenantpage from "./pages/Tenantpage.jsx";

import TenantDetails from "./components/TenantDetails.jsx";
import UpdateForm from "./components/UpdateForm.jsx";

const App = () => (
  <div className="flex min-h-screen flex-col ">
    {/* <Mainnav/> */}

    <Router>
      <Mainnav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Embedded Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Adminsidebar />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />

          <Route path="tenants" element={<Tenantpage />} />

          <Route path="tenants/:id" element={<TenantDetails />} />

          <Route path="tenant-analytics" element={<Dashboard />} />

          <Route path="create-tenant" element={<TenantForm />} />

          <Route path="update-tenant" element={<UpdateForm/>} />


         

        
        </Route>
      </Routes>
      <Footer />
    </Router>

    {/* <Footer/> */}
  </div>
);

export default App;
