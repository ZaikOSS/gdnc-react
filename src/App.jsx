import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white">
        {/* Navbar is always visible */}
        <Navbar />
        <main className="flex-grow p-4">
          <Routes>
            {/* Default route to Home */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            {/* Catch-all route to redirect to Home */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        {/* Footer is always visible */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
