import React, { useEffect, useState } from "react";
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
import PasswordPage from "./pages/PasswordPage"; // Import PasswordPage
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated when the app loads
    if (localStorage.getItem("authenticated") === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white">
        {/* If authenticated, show Navbar, Main, Footer; otherwise, show password page */}
        <Routes>
          <Route path="/password" element={<PasswordPage />} />
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <>
                  <Navbar />
                  <main className="flex-grow p-4">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<AboutMe />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              ) : (
                <Navigate to="/password" />
              )
            }
          />
          {/* For other routes, ensure Navbar and Footer are present */}
          <Route
            path="/about"
            element={
              isAuthenticated ? (
                <>
                  <Navbar />
                  <main className="flex-grow p-4">
                    <AboutMe />
                  </main>
                  <Footer />
                </>
              ) : (
                <Navigate to="/password" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
