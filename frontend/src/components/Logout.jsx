import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser.name);
  // Function to handle logout
  const handleLogout = () => {
    try {
      // Clear authUser state
      setAuthUser(null);

      // Remove user data from localStorage
      localStorage.removeItem("Users");

      // Display success message using toast notification
      toast.success("Logout Successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);

      // Reload the window to reflect logout state changes
    } catch (error) {
      // Catch any errors and display an error message using toast
      toast.error("Error: " + error.message);
      setTimeout(() => {}, 2000);
    }
  };

  return (
    <div className="flex items-center space-x-5">
      {authUser?.name && (
        <span className="text-gray-700 overflow-hidden whitespace-nowrap">
          Hello, {authUser.name}
        </span>
      )}
      {/* Logout button */}
      <button
        className="bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
