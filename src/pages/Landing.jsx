import React, { useEffect, useRef } from "react";
import Wrapper from "../assets/css/wrappers/LandingPage";
import { Link } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const Landing = () => {
  const navbarRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const navbarHeight = navbarRef.current.getBoundingClientRect().height;
    heroRef.current.style.minHeight = `calc(100vh - ${navbarHeight}px)`;
  }, []);
  return (
    <>
      <Navbar navbarRef={navbarRef} />
      <Wrapper ref={heroRef}>
        <div className="hero-content">
          <div className="text-content">
            <h1>
              <span className="fancy">Land Your Dream Job</span> Faster Than
              Ever
            </h1>
            <p>
              Discover thousands of job opportunities tailored to your skills
              and passion. Join a growing network of professionals and take the
              next big step in your career.
            </p>

            <div className="btn-grp">
              <Link className="btn" to="/all-jobs">
                Apply Now
              </Link>
            </div>
          </div>
          {/* <div className="placeholder">
            <img src={photo} alt="job viva photo" />
          </div> */}
        </div>
      </Wrapper>
    </>
  );
};


export default Landing;
