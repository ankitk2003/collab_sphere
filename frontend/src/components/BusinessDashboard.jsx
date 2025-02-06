import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import axios from "axios";

function BusinessDashboard() {
  return (
    <div>
      <NavComponent />
      <Welcome />
    </div>
  );
}

function NavComponent() {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  //fetching the username

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-between items-center w-full px-6 py-3 shadow-md bg-white">
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <span className="ml-4 font-bold text-lg">Collab_Sphere</span>
        </div>

        {/* Middle - Search Bar */}
        <div className="w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Right Side - Notification & Profile Icons */}
        <div className="flex items-center space-x-6 text-xl text-gray-600 relative">
          <AiOutlineBell className="cursor-pointer hover:text-green-400 text-2xl" />

          {/* Profile Icon with Hover Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <AiOutlineUser className="cursor-pointer hover:text-green-400 text-2xl" />

            {/* Dropdown List */}
            {isDropdownOpen && (
              <div className="absolute right-0  w-48 bg-white border rounded-lg shadow-lg">
                <ul className="py-2">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => navigate("/profile")}
                  >
                    Profile
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => navigate("/settings")}
                  >
                    Settings
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Welcome Message */}
    </>
  );
}

function Welcome() {
  const [businessName, setBusinessName] = useState("");

  useEffect(() => {
    async function fetchName() {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(
          "http://localhost:3000/api/v1/business/get-name",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        // Ensure we correctly extract businessName from the API response
        setBusinessName(res.data.businessName|| ""); 
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    }
    fetchName();
  }, []); 

  useEffect(() => {
    console.log(businessName);
  }, [businessName]); // Now logs correctly when businessName updates

  return (
    <div className="flex justify-center mt-5">
      <div className="w-[1300px] h-[200px] bg-[#013a12] text-white text-3xl flex items-start px-20 py-10">
        <span className="mt-2">Welcome to Collab_sphere, </span>
        <span className="text-yellow-600 mt-2 ml-2">{businessName}</span>
      </div>
    </div>
  );
}



export default BusinessDashboard;
