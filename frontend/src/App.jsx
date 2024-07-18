import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";
import Demo from "./pages/Demo";
import "./App.css";
import "./index.css";
import { About } from "./pages/About";
import { Navbar } from "./components/navbar/Navbar";
import Contact from "./pages/Contact";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <div id="app-container">
      <div className="App-header">
        <BrowserRouter>
          <Navbar />
          {/* <ScrollIndicator /> */}
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/about" element={<About />} />

            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<RegisterAndLogout />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
