import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png"; // Ensure correct path and file extension

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/SignUp");
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-yellow-400">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
        </div>

        {auth ? (
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/AddProduct"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Add Product
              </Link>
            </li>
            <li>
              <Link
                to="/UpdateProduct"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Update Product
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Profile
              </Link>
            </li>
            <li>
              <button
                onClick={logout}
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Logout ({JSON.parse(auth).name})
              </button>
            </li>
          </ul>
        ) : (
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/SignUp"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Sign-Up
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Login
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
