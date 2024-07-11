import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

// Create a context for authentication state
export const AuthContext = createContext();

// AuthProvider component to manage authentication state
export default function AuthProvider({ children }) {
  // Fetch initial authentication user from localStorage
  const initialAuthUser = localStorage.getItem("Users");

  // Initialize state for authUser, parsing from localStorage or undefined if not found
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  // Provide authUser state and setter to the context
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
