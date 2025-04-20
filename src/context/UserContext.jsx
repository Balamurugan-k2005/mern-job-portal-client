import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Create the context
const UserContext = createContext();

// Provider Component
const UserProvider = ({ children }) => {
  const [userLoading, setUserLoading] = useState(true); // Tracks loading state
  const [userError, setUserError] = useState({ status: false, message: "" }); // Tracks errors
  const [user, setUser] = useState(null); // Stores the current user

  // Fetch the logged-in user's details
  const handleFetchMe = async () => {
    setUserLoading(true); // Start loading
    try {
      const response = await axios.get(
        `https://mern-job-portal-server-kappa.vercel.app/api/v1/auth/me`,
        { withCredentials: true }
      );

      // Set user data if authenticated
      setUser(response?.data?.result);
      setUserError({ status: false, message: "" });
    } catch (error) {
      if (error.response?.status === 401) {
        // Handle unauthorized access (user is not logged in)
        setUser(null); // Clear user data
      } else {
        // Handle other errors
        setUserError({ status: true, message: error?.response?.data?.message || "Something went wrong" });
      }
    } finally {
      setUserLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    handleFetchMe(); // Fetch user data on component mount
  }, []);

  const contextValue = { userLoading, userError, user, handleFetchMe };
  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

// Hook to use the context
const useUserContext = () => useContext(UserContext);

// Export the context and provider
export { UserContext, UserProvider, useUserContext };