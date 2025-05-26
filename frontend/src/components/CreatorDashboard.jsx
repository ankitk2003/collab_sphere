import React, { useEffect, useState } from "react";
import { AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom"; // Ensure navigate is used
import axios from "axios";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUsers, FaChartLine, FaExternalLinkAlt } from "react-icons/fa";

// ...existing imports...

function CreatorDashboard() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [senderId, setSenderId] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3000/api/v1/creator/user-data", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const id = res.data.userData._id;
        setSenderId(id);
        setUsername(res.data.userData.username);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  // logout logic
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="flex justify-between items-center w-full px-6 py-3 shadow-md bg-white">
        <div className="flex items-center">
          <span className="ml-4 font-bold text-lg">Collab_Sphere</span>
        </div>
        <div className="w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div className="flex items-center space-x-6 text-xl text-gray-600 relative">
          <AiOutlineBell className="cursor-pointer hover:text-green-400 text-2xl" />
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <AiOutlineUser className="cursor-pointer hover:text-green-400 text-2xl" />
            {isDropdownOpen && (
              <div className="absolute right-0 w-48 bg-white border rounded-lg shadow-lg">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate("/profile")}>Profile</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate("/settings")}>Settings</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="flex justify-center mt-5">
        <div className="w-[1300px] h-[200px] bg-[#4d1727] text-white text-3xl flex items-start px-20 py-10">
          <span className="mt-2">Welcome to Collab_sphere, </span>
          <span className="text-yellow-600 mt-2 ml-2">{username}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center gap-10">
        <Businesses senderId={senderId} />
        <CreatorProfile username={username} />
      </div>
    </>
  );
}

// Businesses Component
function Businesses({ senderId }) {
  const [businesses, setBusinesses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/business/all-business")
      .then((res) => setBusinesses(res.data.businessProfiles))
      .catch((err) => console.error("Error fetching businesses:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold ml-10 mb-6">Businesses You Would Like to Work With</h2>
      <div className="space-y-6">
        {businesses.map((business) => (
          <div
            key={business.userId}
            className="border-[2px] w-full h-auto group hover:bg-gray-100 ml-10 p-5"
          >
            <div className="text-sm">Posted on : {business.posted}</div>
            <div className="font-semibold group-hover:underline group-hover:text-green-500 text-2xl mt-2">
              {business.businessName}
            </div>
            <div className="text-sm"><strong>estd Budget:</strong> ${business.budgetRange}</div>
            <div className="mt-4">{business.campaignGoals}</div>
            <div className="mt-2 text-sm"><strong>Industry:</strong> {business.industry}</div>
            <div className="mt-2 text-sm flex items-center gap-2 flex-wrap">
              <strong>Target audience:</strong> {business.targetAudience.join(", ")}
              <div className="flex items-center ml-56">
                <FaMapMarkerAlt className="text-red-500" />
                <span>India</span>
              </div>
            </div>
            <div className="mt-4 text-sm font-serif">
              Know more about brand:{" "}
              <a href={business.websiteUrl} className="text-blue-500 underline" target="_blank">
                {business.websiteUrl}
              </a>
            </div>
            <button
              className="bg-green-500 rounded-2xl text-white p-2 mt-2"
              onClick={() =>
                navigate("/chat", {
                  state: {
                    senderId,
                    recieverId: business._id,
                  },
                })
              }
            >
              Chat
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// CreatorProfile remains unchanged

//profile in right side


function CreatorProfile({ username }) {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No authentication token found. Please log in.");
          setLoading(false);
          return;
        }

        const res = await axios.get("http://localhost:3000/api/v1/creator/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProfileData(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setError("Unauthorized access. Please log in again.");
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (!profileData?.foundUser) {
    return <div className="p-4 text-gray-600">{profileData?.message || "No profile data found"}</div>;
  }

  const { niche, bio, followerCount, engagementRate, platformName, platformLink } = profileData.foundUser;

  return (
    <div className=" bg-white shadow-lg rounded-2xl overflow-hidden p-6 border border-gray-200 mt-10 mr-20 h-[600px]">
      <div><h1>Your Profile:</h1></div>
      <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="w-20 h-20 rounded-full border-2 border-gray-300"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{username}</h2>
          <p className="text-gray-600">{niche}</p>
        </div>
      </div>
      <p className="text-gray-600 mt-2">{bio}</p>
      
      <div className="mt-4 flex gap-4 text-gray-700">
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
          <FaUsers className="text-blue-500" />
          <span>{followerCount.toLocaleString()} Followers</span>
        </div>
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
          <FaChartLine className="text-green-500" />
          <span>{engagementRate.toLocaleString()} Engagement</span>
        </div>
      </div>

      <div className="mt-4">
        <a
          href={platformLink.startsWith("http") ? platformLink : `https://${platformLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-500 hover:underline"
        >
          {platformName} <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
}

export default CreatorDashboard;
