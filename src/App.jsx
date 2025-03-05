import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TenantDetails from "./pages/TenantDetails.jsx";
import Home from "./pages/Homepage.jsx";
import Footer from "./components/Footer.jsx";
import Mainnav from "./components/Mainnav.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";


const App = () => (
  <div className="flex min-h-screen flex-col ">
    {/* <Mainnav/> */}
    
    <Router>
      <Mainnav/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
    
        <Route path="/tenants/:id" element={<TenantDetails />} />
      </Routes>
      <Footer/>
    </Router>

    {/* <Footer/> */}
  </div>
);

export default App;
