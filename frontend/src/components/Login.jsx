import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const navigate = useNavigate();
  const handleUnderDevelopment = () => {
    alert("this functionality is under development");
  };
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      alert("All fields are required");
      return; // Exit early
    }

    try {
      const res = await axios.post("http://localhost:3000/api/v1/user/signin", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      const role = res.data.role;
      alert(`Login successful! Token: ${res.data.token}`);

      //if creator is already registered witn thw profile section so we redirect them to the dashboard.
      if (role == "creator") {
        const profileData = await axios.get(
          "http://localhost:3000/api/v1/creator/profile",
          {
            headers: {
              Authorization: `Bearer ${res.data.token}`,
            },
          }
        );
        console.log(profileData.data);
        if (profileData.data.message) {
          navigate("/creator-form");
        } else {
          navigate("/creator-dashboard"); // Example navigation after login
        }
      } else {
        const profileData = await axios.get(
          "http://localhost:3000/api/v1/business/profile",
          {
            headers: {
              Authorization: `Bearer ${res.data.token}`,
            },
          }
        );
        console.log(profileData.data);
        if (profileData.data.message) {
          navigate("/business-form");
        } else {
          navigate("/business-dashboard");
        }
      }
    } catch (error) {
      // try block ends here....
      if (error.response && error.response.status === 403) {
        console.log(error);
        alert("Incorrect credentials");
      } else {
        console.error(error);
        alert("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <>
      {/* Header Text */}
      <div className="text-center mt-8 mb-4 text-xl font-semibold text-gray-700">
        Good to see you again! Let’s pick up where you left off.
      </div>

      {/* Login Form */}
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login
          </h2>
          <form className="space-y-4">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="e.g., example@email.com"
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                aria-label="Email Address"
                required
                ref={emailRef}
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                aria-label="Password"
                required
                ref={passwordRef}
              />
            </div>

            {/* Login Button */}
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>

          {/* Forgot Password Link */}
          <p className="text-sm text-center text-gray-600">
            Forgot your password?{" "}
            <a
              href="#"
              className="text-blue-500 hover:underline"
              onClick={handleUnderDevelopment}
            >
              Reset here
            </a>
          </p>

          {/* Signup Link */}
          <p className="text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <a href="/choose-role" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
