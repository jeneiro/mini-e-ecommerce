import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login"; // Make sure to adjust the path to your actual Login component
import Dashboard from "./pages/dashboard"; // Adjust the path to your Dashboard component
import ProtectedRoute from "./utilities/protected-routes"; // Path to your ProtectedRoute component
import { HomeCarousel } from "./components/home-carousel";
import { Layout } from "./components/layout";
const AppRoutes = () => {
  return (
    <Routes>
         <Route path="/" element={<Layout />}>
         <Route index element={<HomeCarousel />} />
      <Route path="/login" element={<Login />} />

   
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      
         
         </Route>
      {/* Public Route: Login */}
    
      {/* You can add more routes here */}
    </Routes>
  );
};

export default AppRoutes;
