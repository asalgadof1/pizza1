// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Pizzería</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">🍕Home</a>
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <a className="nav-link" href="#">🔓Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">🔒Logout</a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <a className="nav-link" href="#">🔐Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">🔐Register</a>
              </li>
            </>
          )}
          </ul>
          <div className="nav-item ml-auto">
            <a className="nav-link total" href="#">🛒Total: ${total.toLocaleString()}</a>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
