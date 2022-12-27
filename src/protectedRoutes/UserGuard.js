import { UserContext } from "../context/User/UserContext";
import React, { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";

export default function UserGuard({ to,children } ) {
  const [{userData} ]= useContext(UserContext);
  if (userData?.userName ) {
    return <Navigate to={`/${userData?.userName}`} replace  />;
  }

  return children
}