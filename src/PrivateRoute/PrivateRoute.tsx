import React, { useState } from "react";
import { Navigate } from "react-router";
// import { useAuth } from "./AuthContext"; // Auth context for managing authentication

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }: {children: React.ReactNode}) => {
  const isAuthenticated: boolean  = false // Check if the user is authenticated
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(!isAuthenticated);


  return (
    <>
      {isAuthenticated ? (
        children
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default PrivateRoute;
