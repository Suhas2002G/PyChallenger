import React from "react";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <img
                src="data:image/png;base64,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"
                alt="PyChallenger Logo"
              />
              <span>PyChallenger</span>
            </div>
            <div className="nav-links">
              <a href="#">Challenges</a>
              <a href="#">Leaderboard</a>
              <a href="#">Resources</a>
              <a href="#">Community</a>
            </div>
            <button className="button">Sign In</button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
