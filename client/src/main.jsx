import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import authDataContext from "./context/authContext";
import authDataContext from "./context/authContext.jsx" 

import Home from "./page/home/Home.jsx";
import Login from "./page/authentication/Login.jsx";
import Signup from "./page/authentication/Signup.jsx";
import ProtectedRoute from "./components/utilities/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <authDataContext.Provider value={{ serverUrl: "http://localhost:8000" }}>
      <RouterProvider router={router} />
    </authDataContext.Provider>
  </Provider>
);
