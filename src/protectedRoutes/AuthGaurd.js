import { UserContext } from "../context/User/UserContext";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

export default function AuthGuard({ children } ) {
  const [{userData} ]= useContext(UserContext);
  if (!userData) {
    return <Navigate to='/'  />;
  }

  return children;
}