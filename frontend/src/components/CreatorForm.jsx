import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const niches = [
  "Technology",
  "Gaming",
  "Fashion & Beauty",
  "Fitness & Health",
  "Food & Cooking",
  "Travel & Adventure",
  "Personal Finance",
  "Education",
  "Vlogging",
  "Music",
  "Photography",
  "Art & Design",
];

function CreatorForm() {
  const [selectedNiche, setSelectedNiche] = useState("");
  const bioRef = useRef();
  const platformNameRef = useRef();
  const platformLinkRef = useRef();
  const followerCountRef = useRef();
  const followerEngagementRef = useRef();
  const navigate=useNavigate();
  async function handleSubmit() {
    try {
      const token = localStorage.getItem("token");
      const finalToken = `Bearer ${token}`;
      console.log(finalToken);
      //  console.log(token);
      //  console.log(selectedNiche);

      const bio = bioRef.current.value;
      const platformName = platformNameRef.current.value;
      const platformLink = platformLinkRef.current.value;
      const followerCount = followerCountRef.current.value;
      const engagementRate = followerEngagementRef.current.value;
      const niche = selectedNiche;
      console.log(
        bio,
        platformLink,
        platformName,
        followerCount,
        engagementRate,
        niche
      );

      const res = await axios.post(
        "http://localhost:3000/api/v1/creator/profile",
        {
          bio,
          platformName,
          platformLink,
          followerCount,
          engagementRate,
          niche,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data.message);
  navigate("/creator-dashboard");
    } catch (error) {
      console.log("token not found", error);
    }
  }

  return (
    <div className="container mx-auto p-5">
      <div id="logo">
        <span className="font-bold ml-5 text-xl">Collab_sphere</span>
      </div>

      <div className="text-center text-lg font-bold mt-5">
        <p>A few last details, then you can check and publish your profile.</p>
      </div>

      <div className="text-center text-sm mt-3 text-gray-600">
        <p>A professional photo helps you build trust with your clients.</p>
        <p>To keep things safe and simple, they'll pay you through us.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-6">
        <div className=" p-5 w-full md:w-72 flex flex-col items-center">
          <div className="h-36 w-36 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <img
              src="/placeholder-image.png"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
          <input
            type="file"
            className="mt-4 text-sm file:bg-blue-50 file:text-blue-700 file:px-3 file:py-1 file:rounded-full"
            accept="image/*"
          />
        </div>

        <div className="w-full md:flex-1  p-5">
          <div className="mb-4">
            <label htmlFor="bio" className="block text-sm font-medium">
              Bio
            </label>
            <textarea
              id="bio"
              placeholder="Tell about yourself..."
              className="w-full border border-gray-300 p-2 rounded-lg"
              rows="4"
              ref={bioRef}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Select Niche</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={selectedNiche}
              onChange={(e) => setSelectedNiche(e.target.value)}
            >
              <option value="" disabled>
                Select a niche
              </option>
              {niches.map((niche, index) => (
                <option key={index} value={niche}>
                  {niche}
                </option>
              ))}
            </select>
            {selectedNiche && (
              <p className="mt-2 text-sm text-gray-600">
                You selected: <strong>{selectedNiche}</strong>
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="platform-name"
              className="block text-sm font-medium"
            >
              Platform Name
            </label>
            <input
              type="text"
              id="platform-name"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter platform name"
              ref={platformNameRef}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="platform-link"
              className="block text-sm font-medium"
            >
              Platform Link
            </label>
            <input
              type="text"
              id="platform-link"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter platform link"
              ref={platformLinkRef}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="followers-count"
              className="block text-sm font-medium"
            >
              Followers Count
            </label>
            <input
              type="number"
              id="followers-count"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter followers count"
              ref={followerCountRef}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="engagement-rate"
              className="block text-sm font-medium"
            >
              Engagement Rate
            </label>
            <input
              type="text"
              id="engagement-rate"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter engagement rate"
              ref={followerEngagementRef}
            />
          </div>
          <div className="flex justify-end">
            {" "}
            <button
              className="border-gray-600 border-[1px] p-2 h-auto w-auto bg-green-500 text-white hover:text-black hover:bg-white rounded-md"
              onClick={handleSubmit}
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatorForm;
