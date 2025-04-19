import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [isPasswordMatched, setIsPasswordMatched] = useState({
    status: true,
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { username, email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      setIsPasswordMatched({
        status: false,
        message: "Both passwords do not match.",
      });
      return;
    } else {
      setIsLoading(true);
      const user = { username, email, password };

      try {
        const response = await axios.post(
          "https://mern-job-portal-server-kappa.vercel.app/api/v1/auth/register",
          user
        );

        Swal.fire({
          icon: "success",
          text: response?.data?.message,
        });
        reset();
        navigate("/login");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error?.response?.data?.message || "Something went wrong!",
        });
      }
    }
    setIsLoading(false);
  };

  // Hide the popup after 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsPasswordMatched({ status: true, message: "" });
    }, 2000);

    return () => {
      clearInterval(intervalId); // Clear the interval on component unmount
    };
  }, [isPasswordMatched.status]);

  return (
    <Wrapper>
      <div className="container">
        {/* Job Portal Title */}
        <div className="title">Job Portal</div>

        <h1>Create Account</h1>
        {!isPasswordMatched?.status && (
          <p className="error-message">{isPasswordMatched.message}</p>
        )}
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          {/* Username Field */}
          <div className="row">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              autoComplete="off"
              placeholder="Type Here"
              {...register("username", {
                required: "Username is required",
                maxLength: { value: 30, message: "Username is too long (max 30 characters)" },
                minLength: { value: 3, message: "Username is too short (min 3 characters)" },
                pattern: {
                  value: /^[A-Za-z][A-Za-z0-9_]*$/,
                  message: "Username cannot start with a number or special character",
                },
              })}
            />
            {errors?.username && (
              <span className="error-message">{errors?.username?.message}</span>
            )}
          </div>

          {/* Email Field */}
          <div className="row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email@example.com"
              {...register("email", {
                required: "A valid email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors?.email && (
              <span className="error-message">{errors?.email?.message}</span>
            )}
          </div>

          {/* Password Field */}
          <div className="row">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Type Here"
              {...register("password", {
                required: "Password is required",
                maxLength: { value: 20, message: "Password is too long (max 20 characters)" },
                minLength: { value: 8, message: "Password is too short (min 8 characters)" },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])/,
                  message: "Password must include at least one uppercase letter, one number, and one special character",
                },
              })}
            />
            {errors?.password && (
              <span className="error-message">{errors?.password?.message}</span>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="row">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Type Here"
              {...register("confirmPassword", {
                required: "Confirm password is required",
              })}
            />
            {errors?.confirmPassword && (
              <span className="error-message">{errors?.confirmPassword?.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Registering..." : "Register"}
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="footer">
          <p>
            Already have an account?{" "}
            <Link className="link" to="/login">
              Login now
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

  /* Job Portal Title */
  .title {
    font-size: clamp(1.5rem, 3vw, 2rem); /* Responsive font size */
    font-weight: 700;
    color: #1d4ed8; /* Blue color for branding */
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
    color: #334155; /* Neutral gray-blue color */
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
    color: #475569; /* Slightly muted gray */
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .row input {
    padding: 0.75rem 1rem;
    border: 1px solid #cbd5e1; /* Light gray border */
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease-out;
  }

  .row input:focus {
    outline: none;
    border-color: #1d4ed8; /* Blue border on focus */
    box-shadow: 0 0 4px rgba(29, 78, 216, 0.2);
  }

  .row input::placeholder {
    color: #94a3b8; /* Light gray placeholder text */
    opacity: 1;
  }

  .error-message {
    font-size: 0.75rem;
    color: #ef4444; /* Red for error messages */
    margin-top: 0.25rem;
    padding-left: 0.5rem;
  }

  button {
    width: 100%;
    padding: 0.75rem;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 1px;
    background: #2563eb; /* Bright blue for the button */
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 1rem;
    transition: background 0.2s ease-out;
  }

  button:hover {
    background: #1e40af; /* Darker blue on hover */
  }

  button:disabled {
    background: #cbd5e1; /* Grayed out when loading */
    color: #64748b;
    cursor: not-allowed;
  }

  .footer {
    margin-top: 1.5rem;
    text-align: center;
  }

  .footer p {
    font-size: 0.875rem;
    color: #64748b; /* Muted gray */
  }

  .footer .link {
    color: #1d4ed8; /* Blue for link */
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

export default Register;