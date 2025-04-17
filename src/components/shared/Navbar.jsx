/* eslint-disable react/prop-types */

import styled from "styled-components";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";

const Navbar = ({ navbarRef }) => {
    return (
        <Wrapper ref={navbarRef}>
  <div className="container">
    <Logo />
    <div className="nav-links">
      <NavLink className="nav-item" to="/all-jobs">
        Jobs
      </NavLink>
      <NavLink className="nav-item hidden sm:block" to="/dashboard">
        Dashboard
      </NavLink>
      <NavLink className="nav-item login-btn" to="/login">
        Login
      </NavLink>
    </div>
  </div>
</Wrapper>

    );
};

const Wrapper = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  .nav-item {
    font-size: 1rem;
    font-weight: 500;
    color: #334155;
    transition: color 0.3s ease;
    text-decoration: none;
    position: relative;
  }

  .nav-item:hover {
    color: #1e40af;
  }

  .nav-item.active {
    color: #1d4ed8;
  }

  .login-btn {
    background-color: #2563eb;
    color: #fff !important;
    padding: 0.5rem 1.25rem;
    border-radius: 999px;
    font-weight: 600;
    box-shadow: 0 2px 6px rgba(37, 99, 235, 0.3);
    transition: background 0.3s ease, transform 0.2s ease;
  }

  .login-btn:hover {
    background-color: #1e40af;
    transform: translateY(-1px);
  }

  @media screen and (max-width: 640px) {
    padding: 1rem;
    .nav-links {
      gap: 1rem;
    }
    .nav-item {
      font-size: 0.95rem;
    }
  }
`;

export default Navbar;
