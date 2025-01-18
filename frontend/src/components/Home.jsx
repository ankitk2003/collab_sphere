import React from "react";

function Home() {
  return (
    <>
      <div className="md:bg-white h-51.6 w-screen flex justify-between mt-1">
        <div id="first-div" className="flex justify-evenly md:w-3/12  flex justify-between">
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

        <div className="flex justify-evenly md:w-3/12 flex justify-between" id="second-div">
          <button className="bg-white text-green-400 shadow-sm border-2 px-3 py-1 hover:bg-green-400 hover:text-white focus:outline-none">
            Signup
          </button>
          <button className="md:mr-56 hover:text-green-400">Login</button>
        </div>
      </div>


      <div className="flex justify-center">
  <div className="bg-[#013a12] h-[425px] w-[1285px] mt-5">
   
    <div className="flex justify-center">
    <div className="text-white  text-5xl mt-20" >
        <span className="font-semibold tracking-widest">
            Scale  your  business 
        </span><br/>
      <span className="font-semibold tracking-widest">with</span> <span className="ml-3 tracking-wider">Influencers</span>
    </div>
    </div>


    <div className="flex justify-center mt-5">
    <input 
      type="text" 
      placeholder="Search..." 
      class="w-[588px] px-4 py-2 pl-10 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    </div>
  </div>
</div>





    </>
  );
}

export default Home;
