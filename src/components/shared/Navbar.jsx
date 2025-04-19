/* eslint-disable react/prop-types */

import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = ({ navbarRef }) => {
  return (
    <Wrapper ref={navbarRef}>
      <div className="container">
        {/* Job Portal Title */}
        <div className="title">Job Portal</div>

        {/* Navigation Links */}
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

  /* Job Portal Title */
  .title {
    font-size: clamp(1rem, 2vw, 1.5rem); /* Responsive font size */
    font-weight: 700;
    color: #1e40af; /* Blue color for branding */
    letter-spacing: 1px;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #1d4ed8; /* Darker blue on hover */
    }
  }

  /* Navigation Links */
  .nav-links {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  .nav-item {
    font-size: clamp(0.9rem, 1.5vw, 1.1rem); /* Responsive font size */
    font-weight: 500;
    color: #334155; /* Neutral gray color */
    transition: color 0.3s ease;
    text-decoration: none;
    position: relative;

    &.active {
      color: #1d4ed8; /* Highlight active link */
      font-weight: 600;
    }

    &:hover {
      color: #1e40af; /* Slightly darker blue on hover */
    }
  }

  /* Login Button */
  .login-btn {
    background-color: #2563eb; /* Bright blue for the button */
    color: #fff !important;
    padding: 0.5rem 1.25rem;
    border-radius: 999px; /* Pill shape */
    font-weight: 600;
    box-shadow: 0 2px 6px rgba(37, 99, 235, 0.3);
    transition: background 0.3s ease, transform 0.2s ease;

    &:hover {
      background-color: #1e40af; /* Darker blue on hover */
      transform: translateY(-1px); /* Subtle lift effect */
    }
  }

  /* Responsive Design */
  @media screen and (max-width: 640px) {
    padding: 1rem;

    .nav-links {
      gap: 1rem;
    }

    .nav-item {
      font-size: clamp(0.8rem, 1.2vw, 1rem); /* Smaller font size for mobile */
    }

    /* Hide Dashboard Link on Small Screens */
    .hidden.sm\\:block {
      display: none;
    }
  }
`;

export default Navbar;