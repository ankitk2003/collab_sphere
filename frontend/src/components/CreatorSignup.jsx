import React from "react";

function CreatorSignup() {
  return (
    <>
      <div className="flex justify-center mt-5">
        <h1 className="font-serif text-3xl">
          Find your dream company to work with
        </h1>
      </div>

      <div id="form-div" className="mt-6">
        {/* OAuth Buttons */}
        <div id="oAuthDiv" className="flex justify-center">
          <button className="border-[2px] rounded-3xl h-[30px] w-[200px] hover:bg-green-500 hover:text-white">
            Continue with Apple ID
          </button>
          <span className="ml-5">or</span>
          <button className="border-[2px] ml-5 rounded-3xl h-[30px] w-[200px] hover:bg-green-500 hover:text-white">
            Continue with Google
          </button>
        </div>

        {/* Username Field */}
        <div
          id="user-pass-div"
          className="flex flex-col items-start mt-4 mx-auto w-[300px] ml-36"
        >
          <label htmlFor="username" className="text-lg mb-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your name"
            className="border-[1px] border-black border-opacity-40 rounded-lg p-1 w-[450px]"
          />
        </div>
      </div>
    </>
  );
}

export default CreatorSignup;
