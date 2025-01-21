import React, { useState } from "react";

function Choose() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (type) => {
    setSelected(type);
  };
  const handleSignup = () => {
    if (selected === "creator") {
    } else if (selected === "business") {
    }
  };

  return (
    <>
      <div className="w-screen h-35 ml-8 font-bold text-lg mt-1.4">
        Collab_Sphere
      </div>
      <div className="flex justify-center flex-wrap text-6xl mt-5">
        Join as a creator or business
      </div>
      <div className="flex justify-center mt-20">
        {/* Creator Div */}
        <div
          id="creator-div"
          className={`border-[2px] border-black h-[200px] w-[200px] flex justify-center cursor-pointer ${
            selected === "creator" ? "bg-gray-200" : ""
          }`}
          onClick={() => handleSelect("creator")}
        >
          <p className="ml-5 mt-16 font-semibold">
            I am a business owner looking for influencers.
          </p>
        </div>

        {/* Business Div */}
        <div
          id="business-div"
          className={`border-[2px] border-black h-[200px] w-[200px] flex justify-center ml-10 cursor-pointer ${
            selected === "business" ? "bg-gray-200" : ""
          }`}
          onClick={() => handleSelect("business")}
        >
          <p className="ml-5 mt-16 font-semibold">
            I am an influencer looking for a business.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        {selected && (
          <button
            className="px-5 py-3 bg-green-500 text-white font-bold rounded"
            onClick={handleSignup}
          >
            {selected === "creator"
              ? "Proceed as a Business Owner"
              : "Proceed as an Influencer"}
          </button>
        )}
      </div>
    </>
  );
}

export default Choose;
