import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useState } from "react";
import RefreshHandler from "./components/RefreshHandler";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const PrivateRouter = ({ element }) => {
    return authenticated ? element : <Navigate to="/login" />;
  };
  return (
    <>
      <RefreshHandler setAuthenticated={setAuthenticated} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<PrivateRouter element={<Home />} />} />
      </Routes>
    </>
  );
}

export default App;
