import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../../api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../../constants";
import { useEffect, useState } from "react";

function ProtectedRoute({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(null);

  // Check auth status on component mount, if errors set isAuth to false
  useEffect(() => {
    auth().catch(() => setIsAuthorized(false));
  });

  // Refreshes the access token
  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try {
      // Make a POST request to refresh the access token
      const res = await api.post("/api/token/refresh/", {
        refresh: refreshToken,
      });
      // If the request is successful, update the access token and set authorization to true
      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } catch (error) {
      console.log(error);
      setIsAuthorized(false);
    }
  };

  // Function to check if the user is authenticated
  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setIsAuthorized(false);
      return;
    }

    // Decode the token to get its expiration time
    const decoded = jwtDecode(token);
    const tokenExpiration = decoded.exp;
    const now = Date.now() / 1000;

    // If the token is expired, try to refresh it
    if (tokenExpiration < now) {
      await refreshToken();
    } else {
      setIsAuthorized(true);
    }
  };

  // Show loading state while checking authorization
  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  // If authorized, render the children components, otherwise redirect to login
  return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
