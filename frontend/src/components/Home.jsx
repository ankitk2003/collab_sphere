import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBullhorn,
  FaStar,
  FaGift,
  FaHandshake,
  FaCalendarAlt,
  FaRegImage,
  FaLightbulb,
  FaCogs,
} from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaSnapchatGhost,
  FaTelegramPlane,
} from "react-icons/fa";

function Home() {
  const navigate = useNavigate();
  const serviceIcons = [
    { name: "Sponsored Posts", icon: <FaBullhorn /> },
    { name: "Product Reviews", icon: <FaStar /> },
    { name: "Giveaways and Contests", icon: <FaGift /> },
    { name: "Brand Ambassadorship", icon: <FaHandshake /> },
    { name: "Event Promotion", icon: <FaCalendarAlt /> },
    { name: "Story Features", icon: <FaRegImage /> },
    { name: "Campaign Ideation", icon: <FaLightbulb /> },
    { name: "Collaborative Products", icon: <FaCogs /> },
  ];

  return (
    <>
      <div className="md:bg-white h-51.6 w-screen flex justify-between mt-1 sticky top-0">
        <div
          id="first-div"
          className="flex justify-evenly md:w-3/12 flex justify-between"
        >
          <span className="w-200 h-35 ml-8 font-bold text-lg mt-1.4">
            Collab_Sphere
          </span>
          <select id="dropdown" name="options">
            <option value="option1">Explore</option>
            <option value="option1">Podcast</option>
            <option value="option2">Blog</option>
            <option value="option3">Answers</option>
          </select>
        </div>

        <div
          className="flex justify-evenly md:w-3/12 flex justify-between"
          id="second-div"
        >
          <button
            className="bg-white text-green-400 shadow-sm border-2 px-3 py-1 hover:bg-green-400 hover:text-white focus:outline-none"
            onClick={() => {
              navigate("/choose-role");
            }}
          >
            Signup
          </button>
          <button className="md:mr-56 hover:text-green-400"
          onClick={()=>{
            navigate("/login")
          }}>Login</button>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="bg-[#013a12] h-[425px] w-[1285px] mt-5">
          <div className="flex justify-center">
            <div className="text-white  text-5xl mt-20">
              <span className="font-semibold tracking-widest">
                Scale your business
              </span>
              <br />
              <span className="font-semibold tracking-widest">with</span>{" "}
              <span className="ml-3 tracking-wider font-mono">Influencers</span>
            </div>
          </div>

          <div className="flex justify-center mt-5">
            <input
              type="text"
              placeholder="Search..."
              className="w-[588px] px-4 py-2 pl-10 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div
            className="text-white flex justify-center mt-16 tracking-widest opacity-75"
            id="brand-div"
          >
            <span>Trusted by :-</span> <span className="ml-4">BEWAKOOF</span>
            <span className="ml-4">Snitch</span>
            <span className="ml-4">Hopscotch</span>
            <span className="ml-4">ASOS</span>
            <span className="ml-4">Boohoo</span>
          </div>
        </div>
      </div>

      <div
        id="services-id"
        className="flex flex-wrap justify-center gap-4 mt-5"
      >
        {serviceIcons.map((service, index) => (
          <div
            key={index}
            className="text-black h-[150px] w-[150px] border-[1px]  p-4 flex flex-col items-center rounded-3xl shadow-lg"
          >
            <div className="text-grey-500 text-2xl mb-3">{service.icon}</div>
            <div className="text-lg font-semibold mt-1">{service.name}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5 te">
        <div className="font-bold text-2xl">
          promote your businesses thorugh :-
        </div>
      </div>
      <div className="flex justify-center>">
        <div className="flex flex-wrap justify-center gap-36 w-[1285px] mt-5 ml-12">
          {/* Facebook */}
          <FaFacebook className="text-blue-600 text-[100px] cursor-pointer hover:scale-110" />
          {/* Instagram */}
          <FaInstagram className="text-pink-500 text-[100px] cursor-pointer hover:scale-110" />
          {/* YouTube */}
          <FaYoutube className="text-red-600 text-[100px] cursor-pointer hover:scale-110" />
          {/* Snapchat */}
          <FaSnapchatGhost className="text-yellow-400 text-[100px] cursor-pointer hover:scale-110" />
          {/* Telegram */}
          <FaTelegramPlane className="text-blue-400 text-[100px] cursor-pointer hover:scale-110" />
        </div>
      </div>
    </>
  );
}

export default Home;
