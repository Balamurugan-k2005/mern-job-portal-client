import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useUserContext } from "../context/UserContext";

const Login = () => {
  const { handleFetchMe } = useUserContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(""); // For success/error messages
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/"; // to navigate right location after login

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://mern-job-portal-server-kappa.vercel.app/api/v1/auth/login",
        data,
        {
          withCredentials: true,
        }
      );

      // Set success notification
      setNotification(response?.data?.message || "Login successful");

      handleFetchMe();
      reset();
      setTimeout(() => navigate(from, { replace: true }), 1000); // Redirect after 1 second
    } catch (error) {
      // Set error notification
      setNotification(error?.response?.data?.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return (
    <Wrapper>
      {/* Notification Bar */}
      {notification && (
        <div className={`notification ${notification.includes("successful") ? "success" : "error"}`}>
          {notification}
        </div>
      )}

      <div className="container">
        <div className="title">Job Portal</div>

        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div className="row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email@example.com"
              {...register("email", {
                required: {
                  value: true,
                  message: "A valid email is required",
                },
              })}
            />
            {errors?.email && (
              <span className="error-message">{errors?.email?.message}</span>
            )}
          </div>
          <div className="row">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Type Here"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
            />
            {errors?.password && (
              <span className="error-message">{errors?.password?.message}</span>
            )}
          </div>
          <div className="flex justify-center">
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
        <div className="footer">
          <p>
            Don't have an account?{" "}
            <Link className="link" to="/register">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f9faff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;

  /* Notification Styles */
  .notification {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 600;
    color: #fff;
    z-index: 1000;
    transition: all 0.3s ease;
  }

  .notification.success {
    background: #22c55e; /* Green for success */
  }

  .notification.error {
    background: #ef4444; /* Red for error */
  }

  .container {
    background: var(--color-white);
    max-width: 360px;
    width: 100%;
    padding: 58px 44px;
    border: 1px solid #e1e2e0;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }

  .title {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    color: #1d4ed8;
    text-align: center;
    margin-bottom: 1rem;
    letter-spacing: 1px;
    cursor: default;
  }

  h1 {
    margin-top: 0;
    text-align: center;
    text-transform: capitalize;
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    font-weight: 600;
    color: #334155;
  }

  form {
    margin-top: calc(1rem + 0.9vw);
  }

  .row {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .row label {
    font-size: 0.875rem;
    color: #475569;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .row input {
    padding: 0.75rem 1rem;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease-out;
  }

  .row input:focus {
    outline: none;
    border-color: #1d4ed8;
    box-shadow: 0 0 4px rgba(29, 78, 216, 0.2);
  }

  .row input::placeholder {
    color: #94a3b8;
    opacity: 1;
  }

  .error-message {
    font-size: 0.75rem;
    color: #ef4444;
    margin-top: 0.25rem;
    padding-left: 0.5rem;
  }

  button {
    width: 100%;
    padding: 0.75rem;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 1px;
    background: #2563eb;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 1rem;
    transition: background 0.2s ease-out;
  }

  button:hover {
    background: #1e40af;
  }

  button:disabled {
    background: #cbd5e1;
    color: #64748b;
    cursor: not-allowed;
  }

  .footer {
    margin-top: 1.5rem;
    text-align: center;
  }

  .footer p {
    font-size: 0.875rem;
    color: #64748b;
  }

  .footer .link {
    color: #1d4ed8;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s ease-out;
  }

  .footer .link:hover {
    text-decoration: underline;
  }

  @media (max-width: 458px) {
    .container {
      width: 90%;
      padding: 30px 20px;
    }
  }
`;

export default Login;