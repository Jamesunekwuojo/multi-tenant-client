import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TenantDetails from "./pages/TenantDetails.jsx";
import Home from "./pages/Homepage.jsx";

const App = () => (
  <div className="font-sans">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tenants/:id" element={<TenantDetails />} />
      </Routes>
    </Router>
  </div>
);

export default App;
