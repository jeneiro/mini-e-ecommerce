import React from "react";
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../assets/polotno.png";
import { useAppDispatch } from "../utilities/custom-dispatch-hook";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { logout } from "../redux/auth";

export const NavbarComponent = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { token } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/'); // 
  };

  return (
    <div className="shadow-lg">
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} to="/" style={{ cursor: "pointer" }}>
          <img
            src={logo}
            className="mr-3 h-6 xl:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            InkGenius Tech
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {token ? (
            <Button onClick={handleLogout} className="text-white">
              Logout
            </Button>
          ) : (
            <Button>
              <Link to="/login" className="text-white">
                Login
              </Link>
            </Button>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link>
            <Link to="/" >
              Home
            </Link>
          </Navbar.Link>
          {
            token&&  <Navbar.Link>
            <Link to="/dashboard" >
             Dashboard
            </Link>
          </Navbar.Link>
          }
          <Navbar.Link>
            <Link to="/about" >
              About
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/services" >
              Services
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/pricing" >
              Pricing
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/contact" >
              Contact
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
