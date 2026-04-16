import { Navigate } from "react-router";
import React from "react";
import LandingPage from "../components/LandingPage";
import STLUploadScreen from "../components/STLUploadScreen";


export const PublicRoutes = [
    {
      path: "/",
      element:<LandingPage /> 
    },
    {
      path: "/UploadScreen",
      element:<STLUploadScreen /> 
    },
    {
      path:"*",
      element: <Navigate to="/" replace />
    }
  ];