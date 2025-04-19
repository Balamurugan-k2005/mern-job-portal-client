import React, { createContext, useContext, useState } from "react";
import Wrapper from "../assets/css/wrappers/Dashboard";
import { Outlet } from "react-router-dom";
import { SmallSidebar, LargeSidebar, DashboardNavbar } from "../components";
import { useUserContext } from "../context/UserContext";
import axios from "axios";

const DashboardContext = createContext();

const DashboardLayout = () => {
  const { handleFetchMe, user } = useUserContext();
  const [showSidebar, setShowSidebar] = useState(false);
  const [notification, setNotification] = useState(""); // For success/error messages

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "https://mern-job-portal-server-kappa.vercel.app/api/v1/auth/logout",
        {},
        { withCredentials: true }
      );

      // Set success notification
      setNotification(response?.data?.message || "You have been logged out successfully");

      // Clear user data and redirect after 1 second
      setTimeout(() => {
        handleFetchMe(); // Fetch updated user state (logged out)
        window.location.href = "/login"; // Redirect to login page
      }, 1000);
    } catch (error) {
      // Set error notification
      setNotification(error?.response?.data || "Something went wrong!");
    }
  };

  // Passing values via context
  const values = { handleLogout, showSidebar, setShowSidebar, notification };
  return (
    <DashboardContext.Provider value={values}>
      <Wrapper>
        {/* Notification Bar */}
        {notification && (
          <div className={`notification ${notification.includes("successfully") ? "success" : "error"}`}>
            {notification}
          </div>
        )}

        <main className="dashboard">
          <SmallSidebar />
          <LargeSidebar />
          <div className="">
            <DashboardNavbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;