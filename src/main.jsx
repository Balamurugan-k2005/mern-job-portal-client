import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import './App.css';
import router from "./Router/Routes";
import { RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "./context/UserContext"; // Import UserProvider instead of UserContext
import axios from "axios";

axios.defaults.withCredentials = true;

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            {/* Use UserProvider instead of UserContext */}
            <UserProvider>
                <RouterProvider router={router}></RouterProvider>
            </UserProvider>
        </QueryClientProvider>
    </React.StrictMode>
);