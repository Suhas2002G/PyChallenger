
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Login from './Login';

const Navbar = () => {
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignInClick = () => {
    setShowLogin(true);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkClass = (path) =>
    `block md:inline-block text-white font-medium hover:text-[#ffd43b] transition-colors duration-300 ${
      location.pathname === path ? "border-b-2 border-[#ffd43b]" : ""
    }`;

  return (
    <>
      <header className="bg-[#3776ab] text-white py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex justify-between items-center relative">
            {/* Logo */}
            <div className="flex items-center text-2xl font-bold">
              <img
                src="https://media.istockphoto.com/id/1306552437/vector/abstract-letter-b-modern-logo-icon-design-concept-creative-bright-gradient-symbol-logotype.jpg?s=612x612&w=0&k=20&c=BTl_8Li8b5DgnJ_Ii8UV_8JTdzVvkZsDCxQYXSgTCa8="
                alt="Bindas Logo"
                className="h-12 mr-2 rounded-full"
              />
              <span>BINDAS</span>
            </div>

            {/* Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Links + SignIn */}
            <div className="hidden md:flex gap-6 items-center">
              <Link to="/" className={linkClass("/")}>
                Home
              </Link>
              <Link to="/dashboard" className={linkClass("/dashboard")}>
                Dashboard
              </Link>
              <Link to="/about" className={linkClass("/about")}>
                About
              </Link>
              <Link to="/contact" className={linkClass("/contact")}>
                Contact
              </Link>

              <button
                onClick={handleSignInClick}
                className="bg-[#ffd43b] text-[#1e293b] px-4 py-2 rounded font-semibold cursor-pointer transition-all duration-300 hover:bg-[#e6be36] hover:-translate-y-0.5"
              >
                Sign In
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-[#3776ab] shadow-md flex flex-col gap-4 px-6 py-4 md:hidden z-20">
                <Link to="/" className={linkClass("/")} onClick={toggleMenu}>
                  Home
                </Link>
                <Link
                  to="/dashboard"
                  className={linkClass("/dashboard")}
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
                <Link
                  to="/about"
                  className={linkClass("/about")}
                  onClick={toggleMenu}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className={linkClass("/contact")}
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
                <button
                  onClick={() => {
                    handleSignInClick();
                    toggleMenu();
                  }}
                  className="bg-[#ffd43b] text-[#1e293b] px-4 py-2 rounded font-semibold transition-all duration-300 hover:bg-[#e6be36]"
                >
                  Sign In
                </button>
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* Login Modal */}
      {showLogin && <Login onClose={closeLogin} />}
    </>
  );
};

export default Navbar;