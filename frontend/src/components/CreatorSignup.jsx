import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CreatorSignup() {
  const navigate = useNavigate();

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignup = async () => {
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const role = "creator";

    // Validate inputs
    if (!username || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    console.log("Signup details:", { username, email, password, role });

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signup",
        {
          username,
          email,
          password,
          role,
        }
      );

      console.log(response.data.message);
      alert("Sign-up successful!");
      usernameRef.current.value = "";
      passwordRef.current.value = "";
      emailRef.current.value = "";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("User already exist");
      }
      console.error("Sign-up failed:", error.response?.data || error.message);
    }
  };

  return (
    <>
      <div id="logo">
        <span className="font-bold ml-5 text-xl">Collab_sphere</span>
      </div>

      <div className="flex justify-center mt-5">
        <h1 className="font-serif text-3xl">
          Find your dream company to work with
        </h1>
      </div>

      <div
        id="form-div"
        className="mt-6 border-[1px] border-black h-[600px] w-screen border-opacity-30 shadow-md"
      >
        {/* OAuth Buttons */}
        <div id="oAuthDiv" className="flex justify-center mt-10">
          <button className="border-[2px] rounded-3xl h-[30px] w-[200px]">
            Continue with Apple ID
          </button>
          <span className="ml-5">or</span>
          <button className="border-[2px] ml-5 rounded-3xl h-[30px] w-[200px] bg-blue-400 text-white">
            Continue with Google
          </button>
        </div>

        {/* Username Field */}
        <div
          id="user-pass-div"
          className="flex flex-col items-start mt-4 mx-auto w-[450px]"
        >
          <label htmlFor="username" className="text-lg mb-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your name"
            className="border-[1px] border-black border-opacity-40 rounded-lg p-1 w-[450px]"
            required
            ref={usernameRef}
          />
        </div>

        {/*email*/}
        <div
          id="user-pass-div"
          className="flex flex-col items-start mt-4 mx-auto w-[450px]"
        >
          <label htmlFor="email" className="text-lg mb-2">
            Email:
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter your Email"
            className="border-[1px] border-black border-opacity-40 rounded-lg p-1 w-[450px]"
            required
            ref={emailRef}
          />
        </div>

        {/*password*/}
        <div
          id="user-pass-div"
          className="flex flex-col items-start mt-4 mx-auto w-[450px]"
        >
          <label htmlFor="password" className="text-lg mb-2">
            Password:
          </label>
          <input
            type="text"
            id="password"
            placeholder="Enter your Password"
            className="border-[1px] border-black border-opacity-40 rounded-lg p-1 w-[450px]"
            required
            ref={passwordRef}
          />
        </div>

        {/*check-box */}
        <div
          id="check-box-div"
          className="flex items-start mt-4 mx-auto w-[450px]"
        >
          <span>
            <input type="checkbox"></input>
          </span>
          <span className="ml-5">Yes, I agree to the terms and condition</span>
        </div>

        {/* sign-up-button */}
        <div
          id="user-pass-div"
          className="flex justify-center mt-8 mx-auto w-[450px]"
        >
          <button
            onClick={handleSignup}
            className="border-[1px] border-black w-[200px] h-[35px] rounded-md bg-green-500 text-white"
          >
            Sign Up as Influencer
          </button>
        </div>
      </div>
    </>
  );
}

export default CreatorSignup;
