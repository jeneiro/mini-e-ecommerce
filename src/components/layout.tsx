// Layout.tsx
import React from "react";
import { NavbarComponent } from "./navbar";
import { FooterComponent } from "./footer";
import { Outlet } from "react-router-dom";  // This will render the child components based on the route
import '../styles/layout.css';
export const Layout = () => {
  return (
    <div className="layout">
      <NavbarComponent />
      <div className="main-content">
        {/* Dynamic content will be rendered here */}
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  );
};
